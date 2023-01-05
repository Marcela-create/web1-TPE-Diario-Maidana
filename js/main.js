let captchaNumeros = document.getElementById ("captchaNumeros");
let btnEnviar = document.getElementById ("btnEnviar");
let captchaResultado = document.getElementById ("captchaResultado");
let terminosCondiciones = document.getElementById ("terminosCondiciones"); // en estas variables guarda elementos del html seleccionados por ID

let numero1 = numeroRandom(); //guarda en "numero1" un numero del 0 al 9
let numero2 = numeroRandom(); //guarda en "numero2" un numero del 0 al 9

btnEnviar.addEventListener("click", validar); //agrega un evento al boton enviar que si hace click, llama a la funcion validar
captchaNumeros.innerHTML = numero1+" + "+numero2;

function numeroRandom (){ //esto genera un numero del 0 al 9
    return Math.floor(Math.random() * 10);
}

function validar (){ //valida los datos seleccionados

    let estadoTerminosCondiciones = terminosCondiciones.checked; //guarda el estado del check terminos y condiciones
    let valorCaptchaResultado = captchaResultado.value; //guarda el valor delresultado del captcha
    let suma = numero1+numero2; //suma dos numeros random

    if (estadoTerminosCondiciones){ //si (el estado del check es verdadero)

        if (valorCaptchaResultado == suma){ // si (el valor del resultado del captcha es igual a la suma de los dos numeros random)
            alert("Ya estas participando por el sorteo"); //muestra mensaje
            window.location.reload(); //recarga la pagina
        }
        else { //sino
            alert("Ingrese un resultado correcto"); //muestra este mensaje
            captchaResultado.value = ""; // limpia el captcha
        }
    }
    else { //si esta el check en false
        alert("Acepte los Terminos y Condiciones para poder continuar"); //muestra este mensaje
    }
}
 