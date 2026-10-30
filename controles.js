const teclas = {
    w: false,
    a: false,
    s: false,
    d: false,
}
window.teclas = teclas;

console.log('jogo iniciado')
document.addEventListener('keydown', event =>{
    switch(event.key){
        case 'w':
            teclas.w = true
            console.log(teclas.w)
            break
        case 'a':
            teclas.a = true
            break
        case 's':
            teclas.s = true
            break
        case 'd':
            teclas.d = true
            break
    }
})
document.addEventListener('keyup', event =>{
    switch(event.key){
        case 'w':
            teclas.w = false
            console.log(teclas.w)
            break
        case 'a':
            teclas.a = false
            break
        case 's':
            teclas.s = false
            break
        case 'd':
            teclas.d = false
            break
       
    }
})