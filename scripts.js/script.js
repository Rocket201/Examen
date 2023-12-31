
//Invocamos al DOM para que la pagina cargue correctamente.
document.addEventListener("DOMContentLoaded", function(){


   // Creamos un addEvenListener que escuche el click del usuario.
     document.addEventListener("click", function(){

        //Recogemos por el id y usando parseFloat para que sea numérico tanto la longitud como el ancho.
        const longitud = parseFloat(document.getElementById("longitud").value)
        const ancho = parseFloat(document.getElementById("ancho").value)
       
         // Lo filtramos con !isNaN para asegurarnos de que sean números(is not a number).
        if(!isNaN (longitud) && !isNaN (ancho)){
          
        // Realizamos las operaciones pertinentes y generamos el area el perimetro y la diagonal.
            area = longitud * ancho;
        /*Le decimos que salida necesita llamar desde el HTML en este caso la salida1 se podria sacar todo por una única salida. */
                salida1.textContent= "Áreal del rectángulo:" + area;

            perímetro = 2*(longitud + ancho);

                salida2 .textContent= "Perímetro del rectángulo:" + perímetro;

            diagonal =  2*((longitud*2)+(ancho*2));

                salida3.textContent="Diagonal del rectángulo:" + diagonal;

            // Finalmente la informacion la ha recibido el html y la ha mostrado.
        } else{
            // Cuando detecte que no hay valores válidos aparecerá este mensaje.
                salida1.textContent="Introduce el Largo y el Ancho."
        }
     });

});


