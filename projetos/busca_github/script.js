async function buscarUsuario() {
    const nomeDigitado = document.getElementById('usuario').value

    const urlAPI = `https://api.github.com/users/${nomeDigitado}`
    const resposta = await fetch(urlAPI)
    const informaçõesDoUsuario = await resposta.json()
    const divResultado = document.getElementById('resultado')
    divResultado.innerHTML = `<img src="${informaçõesDoUsuario.avatar_url}" alt="">`
}