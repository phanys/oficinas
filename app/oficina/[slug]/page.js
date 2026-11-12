import Link from "next/link";
import { notFound } from "next/navigation";
import OfficeInfo from "../../../components/OfficeInfo";
import Checklist from "../../../components/Checklist";
import oficinas from "../../../data/oficinas";

export const dynamicParams = false;

export function generateStaticParams() {
  return oficinas.map((oficina) => ({ slug: oficina.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const oficina = oficinas.find((o) => o.slug === slug);
  return { title: oficina ? oficina.nome : "Oficina não encontrada" };
}

export default async function PaginaOficina({ params }) {
  const { slug } = await params;
  const oficina = oficinas.find((o) => o.slug === slug);

  if (!oficina) notFound();

  return (
    <main className="conteudo pagina-oficina">
      <Link href="/" className="voltar">
        Voltar às oficinas
      </Link>

      <h1 className="pagina-oficina__titulo">{oficina.nome}</h1>

      <OfficeInfo oficina={oficina} />

      <Checklist slug={oficina.slug} checklist={oficina.checklist} />
    </main>
  );
}
