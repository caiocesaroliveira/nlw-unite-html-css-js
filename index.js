let participantes = [
  {
    nome: 'Caio César de Oliveira',
    email: 'caio@email.com',
    dataInscricao: new Date(2024, 2, 10, 9, 40),
    dataCheckIn: null,
  },
  {
    nome: 'Tamiris Geovana da Silva Oliveira',
    email: 'tami@email.com',
    dataInscricao: new Date(2024, 2, 15, 9, 40),
    dataCheckIn: null,
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
    dataCheckIn: null,
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
    dataCheckIn: null,
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
    dataCheckIn: null,
  },
]

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

  if (participante.dataCheckIn == null) {
    dataCheckIn = `
    <button
      data-email = "${participante.email}"
      onclick = "fazerCheckIn(event)"
    >
      Confirmar check-in
    </button>
    `
  }

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

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const nome = dadosDoFormulario.get('nome')
  if (!nome) {
    alert('Nome deve ser informado.')
    return
  }

  const email = dadosDoFormulario.get('email')
  if (!email) {
    alert('Email deve ser informado.')
    return
  }

  const participante = {
    nome,
    email,
    dataInscricao: new Date(),
    dataCheckIn: null,
  }

  const existeParticipante = participantes.find(
    (p) => p.email == participante.email
  )

  if (existeParticipante) {
    alert('Email já cadastrado')
    return
  }

  participantes = [participante, ...participantes]
  atualizarListaParticipantes(participantes)

  event.target.querySelector('[name="nome"]').value = ''
  event.target.querySelector('[name="email"]').value = ''
}

const fazerCheckIn = (event) => {
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'
  if (!confirm(mensagemConfirmacao)) return

  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email
  })

  participante.dataCheckIn = new Date()

  atualizarListaParticipantes(participantes)
}
