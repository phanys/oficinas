"use client";

export default function ChecklistTabs({ etapas, ativa, aoMudar, idBase }) {
  function aoTeclar(evento, indice) {
    let novo = null;
    if (evento.key === "ArrowRight") novo = (indice + 1) % etapas.length;
    if (evento.key === "ArrowLeft")
      novo = (indice - 1 + etapas.length) % etapas.length;
    if (novo === null) return;

    evento.preventDefault();
    aoMudar(etapas[novo].id);
    document.getElementById(`${idBase}-aba-${etapas[novo].id}`)?.focus();
  }

  return (
    <div className="abas" role="tablist" aria-label="Etapas do checklist">
      {etapas.map((etapa, indice) => {
        const selecionada = etapa.id === ativa;
        return (
          <button
            key={etapa.id}
            id={`${idBase}-aba-${etapa.id}`}
            type="button"
            role="tab"
            aria-selected={selecionada}
            aria-controls={`${idBase}-painel`}
            tabIndex={selecionada ? 0 : -1}
            className={`aba${selecionada ? " aba--ativa" : ""}`}
            onClick={() => aoMudar(etapa.id)}
            onKeyDown={(e) => aoTeclar(e, indice)}
          >
            <span className="aba__rotulo">{etapa.rotulo}</span>
            <span className="aba__contagem">
              {etapa.feitas}/{etapa.total}
            </span>
          </button>
        );
      })}
    </div>
  );
}
