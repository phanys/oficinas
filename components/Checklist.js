"use client";

import { useEffect, useId, useState } from "react";
import ChecklistTabs from "./ChecklistTabs";

const ETAPAS = [
  { id: "pre", rotulo: "Pré-oficina" },
  { id: "durante", rotulo: "Durante oficina" },
  { id: "pos", rotulo: "Pós-oficina" },
];

const VAZIO = { pre: [], durante: [], pos: [] };

const chaveArmazenamento = (slug) => `oficinas:checklist:v1:${slug}`;

function lerMarcacoes(slug) {
  try {
    const bruto = window.localStorage.getItem(chaveArmazenamento(slug));
    if (!bruto) return VAZIO;
    const dados = JSON.parse(bruto);
    return {
      pre: Array.isArray(dados.pre) ? dados.pre : [],
      durante: Array.isArray(dados.durante) ? dados.durante : [],
      pos: Array.isArray(dados.pos) ? dados.pos : [],
    };
  } catch {
    return VAZIO;
  }
}

function gravarMarcacoes(slug, marcacoes) {
  try {
    window.localStorage.setItem(
      chaveArmazenamento(slug),
      JSON.stringify(marcacoes)
    );
  } catch {
    // Armazenamento indisponível (ex.: navegação privada): a marcação
    // continua valendo apenas enquanto a página estiver aberta.
  }
}

function apagarMarcacoes(slug) {
  try {
    window.localStorage.removeItem(chaveArmazenamento(slug));
  } catch {
    // Sem ação: não há nada salvo para apagar.
  }
}

export default function Checklist({ slug, checklist }) {
  const idBase = useId().replace(/:/g, "");
  const [etapaAtiva, setEtapaAtiva] = useState("pre");
  const [marcadas, setMarcadas] = useState(VAZIO);
  const [confirmando, setConfirmando] = useState(false);

  // O localStorage só existe no navegador. A primeira renderização usa o
  // estado vazio (igual ao HTML do servidor) e as marcações salvas são
  // carregadas aqui, depois da hidratação.
  useEffect(() => {
    setMarcadas(lerMarcacoes(slug));

    function aoMudarArmazenamento(evento) {
      if (evento.key === null || evento.key === chaveArmazenamento(slug)) {
        setMarcadas(lerMarcacoes(slug));
      }
    }

    window.addEventListener("storage", aoMudarArmazenamento);
    return () => window.removeEventListener("storage", aoMudarArmazenamento);
  }, [slug]);

  function alternar(etapa, tarefa) {
    const lista = marcadas[etapa];
    const novaLista = lista.includes(tarefa)
      ? lista.filter((t) => t !== tarefa)
      : [...lista, tarefa];
    const proximas = { ...marcadas, [etapa]: novaLista };

    setMarcadas(proximas);
    gravarMarcacoes(slug, proximas);
  }

  function reiniciar() {
    apagarMarcacoes(slug);
    setMarcadas(VAZIO);
    setConfirmando(false);
  }

  const etapas = ETAPAS.map((etapa) => {
    const tarefas = checklist?.[etapa.id] ?? [];
    const feitas = tarefas.filter((t) => marcadas[etapa.id].includes(t)).length;
    return { ...etapa, tarefas, feitas, total: tarefas.length };
  });

  const totalGeral = etapas.reduce((soma, e) => soma + e.total, 0);
  const feitasGeral = etapas.reduce((soma, e) => soma + e.feitas, 0);
  const porcentagem =
    totalGeral === 0 ? 0 : Math.round((feitasGeral / totalGeral) * 100);

  const etapaAtual = etapas.find((e) => e.id === etapaAtiva) ?? etapas[0];

  return (
    <section className="checklist" aria-labelledby={`${idBase}-titulo`}>
      <h2 className="checklist__titulo" id={`${idBase}-titulo`}>
        Checklist
      </h2>

      <div className="progresso">
        <div
          className="progresso__trilho"
          role="progressbar"
          aria-label="Progresso geral do checklist"
          aria-valuemin={0}
          aria-valuemax={totalGeral}
          aria-valuenow={feitasGeral}
        >
          <div
            className="progresso__barra"
            style={{ width: `${porcentagem}%` }}
          />
        </div>
        <p className="progresso__texto">
          {feitasGeral} de {totalGeral}{" "}
          {totalGeral === 1 ? "tarefa concluída" : "tarefas concluídas"}
        </p>
      </div>

      <ChecklistTabs
        etapas={etapas}
        ativa={etapaAtual.id}
        aoMudar={setEtapaAtiva}
        idBase={idBase}
      />

      <div
        className="tarefas"
        role="tabpanel"
        id={`${idBase}-painel`}
        aria-labelledby={`${idBase}-aba-${etapaAtual.id}`}
      >
        {etapaAtual.tarefas.length === 0 ? (
          <p className="tarefas__vazio">
            Nenhuma tarefa cadastrada para esta etapa.
          </p>
        ) : (
          <ul className="tarefas__lista">
            {etapaAtual.tarefas.map((tarefa) => {
              const feita = marcadas[etapaAtual.id].includes(tarefa);
              return (
                <li key={tarefa}>
                  <label className={`tarefa${feita ? " tarefa--feita" : ""}`}>
                    <input
                      type="checkbox"
                      className="tarefa__campo"
                      checked={feita}
                      onChange={() => alternar(etapaAtual.id, tarefa)}
                    />
                    <span className="tarefa__caixa" aria-hidden="true" />
                    <span className="tarefa__texto">{tarefa}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div className="rodape-checklist">
        {confirmando ? (
          <div
            className="confirmacao"
            role="alertdialog"
            aria-labelledby={`${idBase}-confirma`}
          >
            <p id={`${idBase}-confirma`} className="confirmacao__texto">
              Apagar todas as marcações desta oficina? Essa ação não pode ser
              desfeita.
            </p>
            <div className="confirmacao__acoes">
              <button
                type="button"
                className="botao botao--perigo"
                onClick={reiniciar}
              >
                Sim, reiniciar
              </button>
              <button
                type="button"
                className="botao botao--contorno"
                onClick={() => setConfirmando(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            className="botao botao--contorno"
            onClick={() => setConfirmando(true)}
          >
            Reiniciar checklist
          </button>
        )}

        <p className="aviso-local">
          As marcações ficam salvas só neste navegador e neste aparelho.
        </p>
      </div>
    </section>
  );
}
