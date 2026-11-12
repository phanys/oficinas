import Link from "next/link";

export default function NaoEncontrada() {
  return (
    <main className="conteudo pagina-oficina">
      <h1 className="pagina-oficina__titulo">Página não encontrada</h1>
      <p className="texto-base">
        Esse endereço não existe. Volte para a lista e escolha sua oficina.
      </p>
      <Link href="/" className="voltar">
        Voltar às oficinas
      </Link>
    </main>
  );
}
