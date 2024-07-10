let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un numero del 1 al 10';

// function intentoDeUsuario(){
//     alert('Click al botón');
// }

function asignarTextoAlUsuario(elemento, texto){
    let elementHTML = document.querySelector(elemento);
    elementHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numberUser = parseInt(document.getElementById('valorUsuario').value);
    // console.log(numeroSecreto);
    // console.log(numberUser);
   console.log(intentos);

    if(numberUser === numeroSecreto){
        asignarTextoAlUsuario('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'Intentos'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    }else{
        if(numberUser > numeroSecreto){
            asignarTextoAlUsuario('p','el numero secreto es menor');
        } else{
            asignarTextoAlUsuario('p','el numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;  
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoAlUsuario = ('p', 'Ya se sortearon todos los numeros posibles');
    }else{
        //Si el numero generado esta en la lista hacemos algo
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
    }
    }


    
}

function condicionesIniciales(){
    asignarTextoAlUsuario('h1','juego del numero secreto');
    asignarTextoAlUsuario('p',`Indica un numero del 1 al ${numeroMaximo}`);
   
    numeroSecreto = generarNumeroSecreto();
    
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar numero aleatorio
    // Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

