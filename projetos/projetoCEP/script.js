async function buscarCep() {
    const cepDigitado = document.getElementById('cep').value
    const urlAPI = `https://viacep.com.br/ws/${cepDigitado}/json/`
    const resposta = await fetch(urlAPI)
    const dadosCEP = await resposta.json()
    
    const imputLogradouro = document.getElementById('logradouro')
    const imputBairro = document.getElementById('bairro')
    const imputCidade = document.getElementById('cidade')
    const imputUF = document.getElementById('uf')

    imputLogradouro.value = dadosCEP.logradouro
    imputBairro.value = dadosCEP.bairro
    imputCidade.value = dadosCEP.localidade
    imputUF.value = dadosCEP.uf

}