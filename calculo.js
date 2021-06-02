setInterval(() => {
    const spanHora = document.getElementById("hora");
    const dia = new Date();
    const hora = `${dia.getHours()}:${dia.getMinutes()}:${dia.getSeconds()}`;
    spanHora.innerText = hora;    
}, 1000);

const dia = new Date();
const spanDiaSemana = document.getElementById("dia-semana");

switch (dia.getDay()) {
    case 0:
        spanDiaSemana.innerHTML = 'Domingo';
        break
    case 1:
        window.document.write(`<strong>Hoje é Segunda-Feira<br />${hora}</strong>`);
        break
    case 2:
        window.document.write(`<strong>Hoje é Terça-Feira<br />${hora}</strong>`);
        break
    case 3:
        spanDiaSemana.innerHTML = 'Quarta-feira';
        break
    case 4:
        window.document.write(`<strong>Hoje é Quinta-Feira<br />${hora}</strong>`);
        break
    case 5:
        window.document.write(`<strong>Hoje é Sexta-Feira<br />${hora}</strong>`);
        break
    case 6:
        window.document.write(`<strong>Hoje é Sábado<br />${hora}</strong>`);
        break
    default:
        window.document.write("<strong>[ERRO] Dia invalido</strong>");
        break
}

function conta() {
    const variavelNumero1 = window.document.getElementById("numero1")
    let VariavelNumero2 = window.document.getElementById("numero2")
    let namber1 = Number(VariavelNumero1.value)
    let namber2 = +(VariavelNumero2.value)
    const soma = namber1 + namber2;

    let Conta = document.getElementById("resultado-somar-valores")
    Conta.innerHTML = `A soma entre ${namber1} e ${namber2} é igual a ${soma} <br/>`
}

function calcular() {
    let velo = window.document.getElementById('velo');
    const resultado = document.getElementById('resultado-checar-multa');
    let res = window.document.querySelector('div#res');
    let final = Number(velo.value);
    res.innerHTML = `Sua velocidade foi de ${final}<br />`
    if (final <= 100) {
        resultado.innerHTML = `Você não ultrapassou os limites de velocidade<br />`
    }
    else if (final > 100) {
        resultado.innerHTML = (`Você ultrapassou o limite de velocidade!<br /><strong>VOCÊ FOI MULTADO</strong>`);
    }
}