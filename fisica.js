let velocidade_rotacao = 3
let angulo_carro = 0
let angulo_movimento = 0
let velocidade = 0
let aceleracao = 25
let posicao_x = 10
let posicao_y = 10
function atualizarFisica(deltatime) {
    // Controle de rotação:
    if (teclas.d === true) {
        angulo_carro += (velocidade_rotacao * deltatime);
    }
    if (teclas.a === true) {
        angulo_carro -= (velocidade_rotacao * deltatime);
    }
    posicao_x += Math.cos(angulo_carro) * velocidade * deltatime;
    posicao_y += Math.sin(angulo_carro) * velocidade * deltatime;

    //fim.
    let brakemotor = 10
    // Controle de aceleração:
    if (teclas.w === true) {
        velocidade += (aceleracao * deltatime);
        console.log("acelerando ", (velocidade).toFixed(2));
    }//freio motor,
    else if (teclas.w === false && velocidade >= 1) {
        velocidade -= (brakemotor * deltatime);
        if (velocidade <= 1) { velocidade = 0 }
        console.log("freio motor ", (velocidade).toFixed(2))
    }//fim.

    //controle de frenagem e re:
    if (teclas.s === true && velocidade > 0) {
        velocidade -= (aceleracao * deltatime);
        console.log("freio",(velocidade).toFixed(2))
    }
    else if (teclas.s === true && velocidade <= 0) { 
        velocidade -= (aceleracao * deltatime)
        console.log("Freio ativo", (velocidade).toFixed(2));
    }// freio motor,
    else if (teclas.s === false && velocidade <= (-1)) {
       velocidade += (brakemotor * deltatime);
       if (velocidade >= (-1)) { velocidade = 0 }
       
    }//fim.
}

window.atualizarFisica = atualizarFisica;