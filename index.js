'use strict';
// Si al hacer click en ENTRAR los valores de cada uno de los elementos del formulario son iguales que los valores guardados en el objeto de mi usuario, mostraré un alert que diga 'Estás dentro', en otro caso, incrementaré en 1 el valor de la variable attemps que contabiliza el número de intentos del usuario y mostraré un div que tengo oculto con el mensaje 'Alguno de los campos no es correcto'.

// Si el usuario supera los 3 intentos aparecerá un mensaje de alert que diga estás bloqueado.

// NOTA: Para mostrar los mensajes por consola normalmente usamos console.log('Mi mensaje'), ahora utilizaremos alert('Mi mensaje') que nos muestra un modal del navegador.

//SELECTORS...
const inpname = document.querySelector ('.username');
const inppassword = document.querySelector ('.userpassword');
const button = document.querySelector ('.login-button');
const message = document.querySelector ('.hidden');

//Number of user attemps
let attemps = 0;

//Object saved in BBDD with user information to compare with my form
const userInfo = {
	name: 'front23',
	password: 'bicicleta'
};

//FUNCTIONS

function logging (ev) {
 	if (inpname.value === userInfo.name && inppassword.value === userInfo.password) {
		alert('Estás dentro');
    message.classList.add ('hidden');
	}else {
		message.innerHTML = 'Alguno de los campos no es correcto';
		message.classList.remove ('hidden');
		attemps = attemps +1;
		if (attemps === 3) {
			alert ('estás bloqueado');
		}
   ev.preventDefault ();
	}

}


//LISTENERS
button.addEventListener ('click',  logging);






