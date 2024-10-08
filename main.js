




async function visualizarDados(){
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
    regiao = 1 
resultado_dados = (dados[0]['resultados'][0]["series"][regiao]['serie'])
resultado_regiao = (dados[0]['resultados'][0]["series"][regiao]["localidade"]['nome'])

console.log(resultado_dados,resultado_regiao)

const pragrafo = document.createElement('p')
paragrafo.classList.add('graficos--container__texto')
paragrafo.innerHTML = `Está é uma pesquisa do IBGE com o foco em $ {tipo_dados}`

const container = document.getElementById()

container.appedChild(paragrafo)
}
