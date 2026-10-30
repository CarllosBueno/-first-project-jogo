let velocidade_rotacao = 2
let angulo_carro = 0
let angulo_movimento = 0

function atualizarFisica(deltatime) {
    if (teclas.d === true) {
        angulo_carro += (velocidade_rotacao * deltatime);
        console.log(angulo_carro);
    };
    if (teclas.a === true){
        angulo_carro -= (velocidade_rotacao * deltatime);
        console.log(angulo_carro);
    }
}

window.atualizarFisica = atualizarFisica;