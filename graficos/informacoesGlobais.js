const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/residencias/residencias-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasComCasaPropria = (dados.total_pessoas_com_casa_propria / 1e8)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio_em_casa)
    const minutos = Math.round((dados.tempo_medio_em_casa - horas) * 60)
    
    const porcentagemPessoasComCasaPropria = ((pessoasComCasaPropria / pessoasNoMundo) * 100);

    const porcentagemTempoEmCasa = ((dados.tempo_medio_em_casa / 24) * 100).toFixed(2);
    
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas, e que aproximadamente <span>${pessoasComCasaPropria} bilhões</span> possuem casa própria, passando, em média, <span>${horas} horas</span> e <span>${minutos} minutos</span> em casa? <br>Isso significa que aproximadamente <span>${porcentagemPessoasComCasaPropria}%</span> das pessoas possuem uma casa própria e que passam <span>${porcentagemTempoEmCasa}%</span> do seu tempo diário nela.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais();