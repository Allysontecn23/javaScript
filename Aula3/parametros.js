// parâmentros de função 

function soma(numero1, numero2) {
    return numero1 + numero2;
}

// function somaOutroNumero() {
//     return 50 + 25;
// }

console.log(soma(23, 34))
console.log(soma(564, 34))
console.log(soma(23, 34))

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}.`
}

console.log(nomeIdade('Allyson', 24))

function multiplica(numero1, numero2) {
    return numero1 * numero2;
}

console.log(multiplica(soma(4,5), soma(3,3)))

function comParametro(param) {
    console.log(param)
}
comParametro()
