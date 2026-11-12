import OfficeCard from "../components/OfficeCard";
import oficinas from "../data/oficinas";

const ACENTOS = ["rosa", "roxo", "azul"];

export default function Home() {
  return (
    <main>
      <section className="abertura">
        <div className="conteudo">
          <h1 className="abertura__titulo">Qual é a sua oficina?</h1>
          <p className="abertura__texto">
            Escolha a oficina para ver as orientações e usar o checklist.
          </p>
        </div>
      </section>

      <section className="conteudo lista-oficinas">
        {oficinas.length === 0 ? (
          <p className="vazio">
            Nenhuma oficina cadastrada. Adicione oficinas em data/oficinas.js.
          </p>
        ) : (
          <ul className="grade-cartoes">
            {oficinas.map((oficina, i) => (
              <li key={oficina.slug}>
                <OfficeCard
                  oficina={oficina}
                  acento={ACENTOS[i % ACENTOS.length]}
                />
              </li>
            ))}
          </ul>
        )}
      </section>
      
    </main>
  );
}
