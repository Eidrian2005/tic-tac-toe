const tablero = document.getElementById('containerCells')
const cuadrados = document.querySelectorAll('.cell')
const contador = document.getElementById('contadorPuntos')
let puntosJ = 0
let puntosC = 0
const jugador = 'X'
const computadora = ['O']
const boton = document.getElementById('ceviche')
const mensaje = document.createElement ('h2')
let turno = true
let filtrado;



const vicCondicion = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


mensaje.style.marginTop = '30px'
mensaje.style.textAlign='center'
tablero.after(mensaje)

function contador() {
    
}

function verificarVictoria() {
    for (let i = 0; i < vicCondicion.length; i++) {
        console.log(vicCondicion[i])
        const [a,b,c] = vicCondicion[i]
        if (cuadrados[a].innerHTML == jugador && cuadrados[b].innerHTML == jugador && cuadrados[c].innerHTML == jugador) {
                mensaje.textContent = 'Jugador X ha ganado'
                return true
        }
    }
    return false
}



function verificarVictoriaIA() {
    for (let i = 0; i < vicCondicion.length; i++) {
        console.log(vicCondicion[i])
        const [a,b,c] = vicCondicion[i]
        if (cuadrados[a].innerHTML == computadora && cuadrados[b].innerHTML == computadora && cuadrados[c].innerHTML == computadora) {

            mensaje.textContent = 'Jugador O ha ganado'
            return true
        }
    }
    return false
}

function verificarEmpate(){
    if (filtrado.length == 0) {
        if(!verificarVictoria() && !verificarVictoriaIA()){
            mensaje.textContent = 'empate'
        }
    }
}


function Reseteo() {
    for(let i = 0; i < cuadrados.length; i++) {
        cuadrados[i].innerHTML = ''
    }
    mensaje.textContent=''
    
}




cuadrados.forEach(element => {
    element.addEventListener("click",()=>{
        
        if (element.innerHTML === '') {
            if (turno) {
                
                element.innerHTML = jugador
                random();
                console.log(verificarVictoria())  
                console.log(filtrado.length);
                console.log(verificarEmpate());
            }
        }
        turno = !turno
    })
});


function random(){
    const numerosVacios = Array.from(cuadrados);
    filtrado = numerosVacios.filter((cuadrados) => cuadrados.innerHTML == '')
    let indice = Math.floor(Math.random() * filtrado.length);


    if (filtrado.length > 0) {
        filtrado[indice].innerHTML = computadora
        console.log(verificarVictoriaIA());
    }
}





