import Link from "next/link";

function contarTarefas(checklist) {
  if (!checklist) return 0;
  return ["pre", "durante", "pos"].reduce(
    (soma, etapa) => soma + (checklist[etapa]?.length ?? 0),
    0
  );
}

export default function OfficeCard({ oficina, acento = "rosa" }) {
  const total = contarTarefas(oficina.checklist);

  return (
    <Link
      href={`/oficina/${oficina.slug}`}
      className="cartao"
      data-acento={acento}
    >
      <span className="cartao__textos">
        <span className="cartao__nome">{oficina.nome}</span>
        <span className="cartao__meta">
          {total === 1 ? "1 tarefa no checklist" : `${total} tarefas no checklist`}
        </span>
      </span>
      <span className="cartao__seta" aria-hidden="true" />
    </Link>
  );
}
