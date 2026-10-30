// quadros processados.
let quadros = 0
// guarda o instante em que o quadro anterior foi medido.
let oldframe = performance.now()
let timeacumulado = 0
let gameboard = document.getElementById('gameboard');
let context2d = gameboard.getContext('2d');

function loop(timeatual) {
    if (true) {
        //carro
        context2d.clearRect(0, 0, window.innerWidth, window.innerHeight)
        context2d.save()
        context2d.translate(posicao_x, posicao_y)
        context2d.rotate(angulo_carro)    
        context2d.fillStyle = 'blue';
        context2d.fillRect(-4, -2, 8, 4);
        context2d.restore()
        
    }

    // calcula o tempo entre os quadros
    let deltatime = (timeatual - oldframe) /1000;
    atualizarFisica(deltatime);

    timeacumulado += deltatime;
    quadros ++;
    
    // atualiza o quadro atual
    oldframe = timeatual;
    
    //contador de FPS
    if (timeacumulado >= 1){
        console.log('FPS:', quadros);
        quadros = 0;
        timeacumulado -= 1;
    };
    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);