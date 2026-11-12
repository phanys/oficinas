/**
 * Dados das oficinas.
 *
 * Para cadastrar uma oficina, copie um bloco e preencha com o conteúdo real.
 * Nenhum componente precisa ser alterado: a tela inicial, a página da oficina
 * e o checklist são montados a partir deste arquivo.
 *
 * - slug: identificador usado no endereço (/oficina/<slug>). Use letras
 *   minúsculas, números e hífens, e não repita entre oficinas.
 * - checklist.pre / durante / pos: texto de cada tarefa. O texto da tarefa é
 *   usado para guardar a marcação; se você editar o texto de uma tarefa, a
 *   marcação antiga dela deixa de valer (a tarefa aparece desmarcada).
 *
 * O bloco abaixo é apenas um MODELO com textos provisórios. Substitua ou
 * remova antes de publicar.
 */
const oficinas = [
  {
    slug: "collab",
    nome: "COLLAB",
    descricao:
      "Oficina sobre levar o Reino de Deus nas escolas.",
    preparacaoSala: [
      "Na sala não deve haver mesas, apenas cadeiras organizadas no formato em U.",
    ],
    materiais: ["Violão", "2 Canetões para quadro branco", "Quadro Branco"],
    checklist: {
      pre: [ "Levar os materiais para a sala","Tirar foto da sala", "Montar a sala de acordo com a descrição", "Conferir materiais", "Testar projetor (se a oficina pede)"],
      durante: ["Avisar no grupo: 'Oficina iniciada!'", "Ficar de prontidão para ajudar o preletor"],
      pos: ["Avisar no grupo: 'Oficina encerrada!'", "Recolher materiais", "Organizar a sala como anteriormente (de acordo com a foto)"],
    },
  },

  {
    slug: "danca",
    nome: "DANÇA",
    descricao:
      "Oficina sobre usar a dança e arte para expandir o Reino de Deus.",
    preparacaoSala: [
      "Espaço amplo e aberto, sem cadeiras ou mesas.",
    ],
    materiais: ["Caixa de som."],
    checklist: {
      pre: [ "Levar os materiais para a sala","Tirar foto da sala", "Montar a sala de acordo com a descrição", "Conferir materiais", "Conferir projetor (se a oficina pede)"],
      durante: ["Avisar no grupo: 'Oficina iniciada!'", "Ficar de prontidão para ajudar o preletor"],
      pos: ["Avisar no grupo: 'Oficina encerrada!'", "Recolher materiais", "Organizar a sala como anteriormente (de acordo com a foto)"],
    },
  },

  {
    slug: "empreender",
    nome: "EMPREENDEDORISMO",
    descricao:
      "Oficina sobre como empreender pode ser uma maneira de expandir o Reino de Deus.",
    preparacaoSala: [
      "Mesas e cadeiras organizadas como em uma sala de aula padrão.",
    ],
    materiais: ["Projetor"],
    checklist: {
      pre: [ "Levar os materiais para a sala","Tirar foto da sala", "Montar a sala de acordo com a descrição", "Conferir materiais", "Conferir projetor (se a oficina pede)"],
      durante: ["Avisar no grupo: 'Oficina iniciada!'", "Ficar de prontidão para ajudar o preletor"],
      pos: ["Avisar no grupo: 'Oficina encerrada!'", "Recolher materiais", "Organizar a sala como anteriormente (de acordo com a foto)"],
    },
  },

  {
    slug: "evangelismo",
    nome: "EVANGELISMO CRIATIVO",
    descricao:
      "Oficina com dicas práticas para pregar o Evangelho nas ruas.",
    preparacaoSala: [
      "Espaço amplo e aberto, sem cadeiras ou mesas.",
    ],
    materiais: ["Folhas de Sulfite"],
    checklist: {
      pre: [ "Levar os materiais para a sala","Tirar foto da sala", "Montar a sala de acordo com a descrição", "Conferir materiais", "Conferir projetor (se a oficina pede)"],
      durante: ["Avisar no grupo: 'Oficina iniciada!'", "Ficar de prontidão para ajudar o preletor"],
      pos: ["Avisar no grupo: 'Oficina encerrada!'", "Recolher materiais", "Organizar a sala como anteriormente (de acordo com a foto)"],
    },
  },

  {
    slug: "haveFun",
    nome: "HAVE FUN",
    descricao:
      "Oficina sobre pregar o Evangelho de maneira divertida.",
    preparacaoSala: [
      "Quadra de esportes.",
    ],
    materiais: ["Apitos para festa infantil"],
    checklist: {
      pre: [ "Levar os materiais para a sala","Tirar foto da sala", "Montar a sala de acordo com a descrição", "Conferir materiais", "Conferir projetor (se a oficina pede)"],
      durante: ["Avisar no grupo: 'Oficina iniciada!'", "Ficar de prontidão para ajudar o preletor"],
      pos: ["Avisar no grupo: 'Oficina encerrada!'", "Recolher materiais", "Organizar a sala como anteriormente (de acordo com a foto)"],
    },
  },

  {
    slug: "influencia",
    nome: "INFLUÊNCIA",
    descricao:
      "Oficina sobre sermos boas influências nessa Terra.",
    preparacaoSala: [
      "Mesas e cadeiras organizadas como em uma sala de aula padrão.",
    ],
    materiais: ["Notebook", "Cabo HDMI", "Televisão ou projetor", "Bexigas", "Palitos de dente"],
    checklist: {
      pre: [ "Levar os materiais para a sala","Tirar foto da sala", "Montar a sala de acordo com a descrição", "Conferir materiais", "Conferir projetor (se a oficina pede)"],
      durante: ["Avisar no grupo: 'Oficina iniciada!'", "Ficar de prontidão para ajudar o preletor"],
      pos: ["Avisar no grupo: 'Oficina encerrada!'", "Recolher materiais", "Organizar a sala como anteriormente (de acordo com a foto)"],
    },
  },

  {
    slug: "libras",
    nome: "LIBRAS",
    descricao:
      "Oficina sobre usar linguas de Sinais para levar o Reino de Deus.",
    preparacaoSala: [
      "Mesas e cadeiras organizadas como em uma sala de aula padrão.",
    ],
    materiais: ["Projetor", "Extensão", "Material impresso"],
    checklist: {
      pre: [ "Levar os materiais para a sala","Tirar foto da sala", "Montar a sala de acordo com a descrição", "Conferir materiais", "Conferir projetor (se a oficina pede)"],
      durante: ["Avisar no grupo: 'Oficina iniciada!'", "Ficar de prontidão para ajudar o preletor"],
      pos: ["Avisar no grupo: 'Oficina encerrada!'", "Recolher materiais", "Organizar a sala como anteriormente (de acordo com a foto)"],
    },
  },

  {
    slug: "minecraft",
    nome: "O PEREGRINO",
    descricao:
      "Oficina criativa que usa minecraft para falar sobre nossa caminhada com Deus.",
    preparacaoSala: [
      "Espaço amplo e aberto, sem cadeiras ou mesas.",
    ],
    materiais: ["EVA - azul, preto, verde (2 folhas cada)","TNT - Azul e verde", "1 pacote de palitos de churrasco", "Canetão: 2 pretos", "Tinta Guache: caixinha com 6 cores", "2 rolos de fita adesiva", "Projetor"],
    checklist: {
      pre: [ "Levar os materiais para a sala","Tirar foto da sala", "Montar a sala de acordo com a descrição", "Conferir materiais", "Conferir projetor (se a oficina pede)"],
      durante: ["Avisar no grupo: 'Oficina iniciada!'", "Ficar de prontidão para ajudar o preletor"],
      pos: ["Avisar no grupo: 'Oficina encerrada!'", "Recolher materiais", "Organizar a sala como anteriormente (de acordo com a foto)"],
    },
  },




];

export default oficinas;
