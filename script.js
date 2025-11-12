function calcularVolCilindro(raio, alturaCil) {
    const pi = 3.14
    return pi * raio * raio * alturaCil
}

function calcularVolEsfera(raio) {
    const pi = 3.14
    return (4 / 3) * pi * raio * raio * raio
}

function calcularVolCapsula(volCilindro, volEsfera) {
    return volCilindro + volEsfera
}

function calcularVolTanque(largura, alturaTan, comprimento) {
    return largura * alturaTan * comprimento
}

function custoCapsula(volCap, precoCP) {
    return volCap * precoCP
}

function custoTanque(volTan, precoTN) {
    return volTan * precoTN
}

let resposta = document.getElementById('resposta')

function principal() {
    let opcao = document.getElementById('opcao').value
    let precoCP = 0.005
    let precoTN = 5000
    let largura = Number(document.getElementById('largura').value)
    let alturaTan = Number(document.getElementById('alturaTan').value)
    let comprimento = Number(document.getElementById('comprimento').value)
    let raio = Number(document.getElementById('raio').value)
    let alturaCil = Number(document.getElementById('alturaCil').value)

    let custoTanqueTotal = 0
    let custoCapsulaTotal = 0

    let volTanque = 0
    let volCapsula = 0
    let volCilindro = 0
    let volEsfera = 0

    resposta.innerHTML = ``

    if (opcao === 'tanque') {
        volTanque = calcularVolTanque(largura, alturaTan, comprimento)
        custoTanqueTotal = custoTanque(volTanque, precoTN)
        console.log(`O Volume do tanque é: ${volTanque.toFixed(2)} m³`)
        console.log(`O Custo do tanque de remédio é: R$ ${custoTanqueTotal.toFixed(2)}`)
        resposta.innerHTML += `O Volume do tanque é: ${volTanque.toFixed(2)} m³ <br>`
        resposta.innerHTML += `O Custo do tanque de remédio é: R$ ${custoTanqueTotal.toFixed(2)}`
    } else if (opcao === 'capsula') {
        volCilindro = calcularVolCilindro(raio, alturaCil)
        volEsfera = calcularVolEsfera(raio)
        volCapsula = calcularVolCapsula(volCilindro, volEsfera)
        custoCapsulaTotal = custoCapsula(volCapsula, precoCP)
        console.log(`O Volume do Cilindro é: ${volCilindro.toFixed(2)} m³`)
        console.log(`O Volume da Esfera é: ${volEsfera.toFixed(2)} m³`)
        console.log(`O Volume da Cápsula é: ${volCapsula.toFixed(2)} m³`)
        console.log(`O Custo da Cápsula de remédio é: R$ ${custoCapsulaTotal.toFixed(2)}`)
        resposta.innerHTML += `O Volume do Cilindro é: ${volCilindro.toFixed(2)} cm³ <br>`
        resposta.innerHTML += `O Volume da Esfera é: ${volEsfera.toFixed(2)} cm³ <br>`
        resposta.innerHTML += `O Volume da Cápsula é: ${volCapsula.toFixed(2)} cm³ <br>`
        resposta.innerHTML += `O Custo da Cápsula de remédio é: R$ ${custoCapsulaTotal.toFixed(2)} <br>`
    } else {
        console.log(`Tipo Inválido!`)
    }
}

