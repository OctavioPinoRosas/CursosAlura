//Variables
numero_maximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numero_maximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos =6;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numero_maximoPosible} por favor:`));
    console.log(numeroSecreto);
    if (numeroUsuario == numeroSecreto) {
        //Es verdadera la condicion, se acierta el numero
        alert(`Acertaste, el número es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    }
    else { //No se acierta
        if (numeroUsuario > numeroSecreto) {//El numero secreto es menor
            alert('El número secreto es menor');
        }
        else {//El numero secreto es mayor
            alert('El número secreto es mayor');
        }
        intentos++;
        //Si se superan el maximo de intentos
        if (intentos > maximosIntentos){
            alert(`llegaste al numero maximo de ${maximosIntentos} intentos`)
            break;
        }
    }
}