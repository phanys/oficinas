export default function OfficeInfo({ oficina }) {
  const { descricao, preparacaoSala = [], materiais = [] } = oficina;

  return (
    <div className="informacoes">
      {descricao && (
        <section className="bloco bloco--descricao">
          <h2 className="bloco__titulo">Sobre a oficina</h2>
          <p className="texto-base">{descricao}</p>
        </section>
      )}

      {preparacaoSala.length > 0 && (
        <section className="bloco bloco--sala">
          <h2 className="bloco__titulo">Como deixar a sala</h2>
          {preparacaoSala.map((orientacao, i) => (
            <p className="texto-base" key={i}>
              {orientacao}
            </p>
          ))}
        </section>
      )}

      {materiais.length > 0 && (
        <section className="bloco bloco--materiais">
          <h2 className="bloco__titulo">Materiais necessários</h2>
          <ul className="materiais">
            {materiais.map((material, i) => (
              <li key={i}>{material}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
