const display = document.getElementById("display"); //Elemento display para mostrar el resultado

const botonesNumero = document.querySelectorAll(".btn-number"); 
const botonesOperador = document.querySelectorAll(".btn-operandos");
const botonesOtros = document.querySelectorAll(".btn-otros");

let primerNumero = ""; //Estas son las variables
let segundoNumero = "";
let operador = "";
let esperandoSegundoNumero = false;

//Código para los números
botonesNumero.forEach(boton => {
    boton.addEventListener("click", () =>{
        if(!esperandoSegundoNumero){            //No entiendo bien lo que hace este código
            primerNumero += boton.textContent;
            display.textContent = primerNumero;
        }else{
            segundoNumero += boton.textContent;
            display.textContent = segundoNumero;
        }
    })
});

//Código para los operadores
botonesOperador.forEach(boton =>{
    boton.addEventListener("click", () =>{ //Si pulsamos el botón = hace el calculo y devuelve el valor con return
       const valor = boton.textContent;
        if (valor === "=") {
            calcular();
            return;
        }
        operador = valor;
        esperandoSegundoNumero = true; 
    })
});

// Botones especiales
botonesOtros.forEach(boton => {
    boton.addEventListener("click", () => {

        const valor = boton.textContent;

        if (valor === "C") {
            primerNumero = "";
            segundoNumero = "";
            operador = "";
            esperandoSegundoNumero = false;
            display.textContent = "0";
        }

    });
});

// Función para calcular, se coloca un switch
function calcular() {

    const a = parseFloat(primerNumero);
    const b = parseFloat(segundoNumero);

    let resultado = 0;

    switch (operador) {         //Dependiendo del case elegido realiza una operación

        case "+":
            resultado = a + b;
            break;

        case "-":
            resultado = a - b;
            break;

        case "x":
            resultado = a * b;
            break;

        case "/":
            if (b === 0) {
                display.textContent = "Error";
                return;
            }
            resultado = a / b;
            break;
    }

    display.value = resultado;

    // Permite seguir calculando
    primerNumero = resultado.toString();
    segundoNumero = "";
    operador = "";
    esperandoSegundoNumero = false;
}