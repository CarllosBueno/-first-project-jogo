import { teclas } from "./controles.js";
import { atualizarFisica } from "./fisica.js";

// quadros processados.
let quadros = 0
// guarda o instante em que o quadro anterior foi medido.
let oldframe = performance.now()
let timeacumulado = 0

function loop(timeatual){

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