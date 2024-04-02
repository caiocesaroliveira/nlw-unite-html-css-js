let participantes = [
  {
    nome: 'Caio César de Oliveira',
    email: 'caio@email.com',
    dataInscricao: new Date(2024, 2, 10, 9, 40),
    dataCheckIn: new Date(2024, 2, 15, 11, 30),
  },
  {
    nome: 'Tamiris Geovana da Silva Oliveira',
    email: 'tami@email.com',
    dataInscricao: new Date(2024, 2, 15, 9, 40),
    dataCheckIn: new Date(2024, 2, 17, 11, 30),
  },
  {
    nome: 'João da Silva',
    email: 'joao@email.com',
    dataInscricao: new Date(2024, 2, 18, 9, 40),
    dataCheckIn: new Date(2024, 2, 18, 11, 30),
  },
  {
    nome: 'Maria Souza',
    email: 'maria@email.com',
    dataInscricao: new Date(2024, 2, 19, 9, 40),
    dataCheckIn: new Date(2024, 2, 22, 11, 30),
  },
  {
    nome: 'Pedro Henrique',
    email: 'pedro@email.com',
    dataInscricao: new Date(2024, 2, 22, 9, 40),
    dataCheckIn: new Date(2024, 2, 23, 11, 30),
  },
  {
    nome: 'Ana Clara',
    email: 'ana@email.com',
    dataInscricao: new Date(2024, 2, 24, 9, 40),
    dataCheckIn: new Date(2024, 2, 28, 11, 30),
  },
  {
    nome: 'Lucas Oliveira',
    email: 'lucas@email.com',
    dataInscricao: new Date(2024, 2, 26, 9, 40),
    dataCheckIn: new Date(2024, 2, 28, 11, 30),
  },
  {
    nome: 'Mariana Lima',
    email: 'mariana@email.com',
    dataInscricao: new Date(2024, 2, 27, 9, 40),
    dataCheckIn: new Date(2024, 2, 31, 11, 30),
  },
  {
    nome: 'Rafaela Santos',
    email: 'rafaela@email.com',
    dataInscricao: new Date(2024, 2, 27, 9, 40),
    dataCheckIn: new Date(2024, 2, 27, 11, 30),
  },
  {
    nome: 'Fernando Oliveira',
    email: 'fernando@email.com',
    dataInscricao: new Date(2024, 2, 29, 9, 40),
    dataCheckIn: new Date(2024, 2, 31, 11, 30),
  },
]

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
  const dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)
  return `
  <tr>
    <td>
      <strong>${participante.nome}</strong>
      <br />
      <small>${participante.email}</small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `
}

const atualizarListaParticipantes = (participantes) => {
  let output = ''
  for (let participante of participantes) {
    output += criarNovoParticipante(participante)
  }

  document.querySelector('tbody').innerHTML = output
}

atualizarListaParticipantes(participantes)
