var texto = document.getElementById("texto_lineas"); /* Obtener el input de texto */
var boton = document.getElementById("boton_lineas"); /* Obtener el boton */
var color_input = document.getElementById("color_lineas"); /* Obtener el color */
boton.addEventListener("click", dibujoPorClick); /* Obtener los eventos ya sea del botón, input,etc.. (primero se escribe cual evento recoger y despues la funcion a disparar) */

//Variales para las lineas
var d = document.getElementById("dibujito"); /* Obtener el canvas */
var ancho = d.width /* Obtener el width del canva */
var lienzo = d.getContext("2d"); /* Hacer que el canvas sea 2d */

// funcion de las linas
function dibujarLinea(color, xinicial, yinical, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 1;
    lienzo.moveTo(xinicial, yinical);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

/*funcion que se activa cuando se da clic */
function dibujoPorClick()
{

    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var yi_2, xf_2;
    var colorcito = color_input.value;
    var espacio = ancho / lineas;

    /*Esta es la esquina inferior izquierza*/
    
    for(l = 0; l < lineas; l++)
    {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    console.log("Linea " + 1);
    }

    /*Esta es la esquina superior izquierda*/

    for(l = 0; l < lineas; l++)
    {
    yi_2 = 300 - (l * espacio);
    xf_2 = espacio * l;
    dibujarLinea(colorcito, 0, yi_2, xf_2, 0);
    console.log("Linea " + 1);
    }

    /*Esta es la esquina superior derecha*/

    for(l = 0; l < lineas; l++)
    {
    yi = espacio * (l + 1);
    xf = espacio * l;
    dibujarLinea(colorcito, 300, yi, xf, 0);
    console.log("Linea " + 1);
    }

    /*Esta es la esquina inferior derecha*/

    for(l = 0; l < lineas; l++)
    {
    yi_2 = espacio * l;
    xf_2 = 300 - (l * espacio);
    dibujarLinea(colorcito, 300, yi_2, xf_2, 300);
    console.log("Linea " + 1);
    }

    dibujarLinea(colorcito, 1, 1, 1, 299)
    dibujarLinea(colorcito, 1, 299, 299, 299)
    dibujarLinea(colorcito, 299, 299, 299, 1)
    dibujarLinea(colorcito, 299, 1, 1, 1)
    dibujarLinea(colorcito, 300, 0, 300, 300)
}

