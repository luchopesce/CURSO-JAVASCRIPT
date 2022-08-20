//funcion sin y con interes, solo reciben tipo number
//en caso de ser NaN devuelven un string

function cuotas_sin_interes(precio, cantidad) {

        if (isNaN(precio) == false && isNaN(cantidad) == false) {
                let cuota_sininteres_final = precio / cantidad;

                return cuota_sininteres_final.toFixed(2);
        }

        else {
                return "Alguno de los datos ingresados son invalidos, solo acepta numeros";
        }

}

function cuotas_con_interes(precio, cantidad, interes) {

        if (isNaN(precio) == false && isNaN(cantidad) == false && isNaN(interes) == false) {

                let cuota_interes = precio * (interes / 100);
                let cuota_coninteres_final = (precio + cuota_interes) / cantidad;

                return cuota_coninteres_final.toFixed(2);
        }

        else {
                return "Alguno de los datos ingresados son invalidos, solo acepta numeros";
        }

}

//Para continuar se ingresa cualquier valor, para retirarse SALIR

let ingresar_valor = prompt("Bienvenido a la calculadora de cuotas con y sin interes, para ingresar continue o para salir escribe 'SALIR'");

while (ingresar_valor != "SALIR") {

        ingresar_valor = prompt("Para cuotas sin interes ingrese '1' , para cuotas con interes ingrese '2' , y para poder salir ingrese 'SALIR'")

        if (parseInt(ingresar_valor) === 1) {

                let ingresar_precio = parseFloat(prompt("Ingrese un precio"));
                let ingresar_cuotas = parseInt(prompt("Ingresar cuotas"));

                let precio_sin_interes = cuotas_sin_interes(ingresar_precio, ingresar_cuotas);

                if (isNaN(ingresar_precio) == false && isNaN(ingresar_cuotas) == false) {
                        console.log("----------------------------CUOTAS SIN INTERES----------------------------");
                        for (let i = 1; i <= ingresar_cuotas; i++) {
                                console.log("La cuota sin interes, N", i, "Tiene un valor de", "$", precio_sin_interes);
                        }
                }
                else {
                        console.log(precio_sin_interes);
                }

        }

        else if (parseInt(ingresar_valor) === 2) {


                let ingresar_precio = parseFloat(prompt("Ingrese un precio"));
                let ingresar_cuotas = parseInt(prompt("Ingresar cuotas"));
                let ingresar_interes = parseInt(prompt("Ingresar el interes"));

                let precio_con_interes = cuotas_con_interes(ingresar_precio, ingresar_cuotas, ingresar_interes);

                if (isNaN(ingresar_precio) == false && isNaN(ingresar_cuotas) == false && isNaN(ingresar_interes) == false) {

                        console.log("----------------------------CUOTAS CON INTERES----------------------------");
                        for (let i = 1; i <= ingresar_cuotas; i++) {
                                console.log("La cuota con interes, N", i, "Tiene un valor de", "$", precio_con_interes);
                                console.log("En base a un interes de %", ingresar_interes);
                        }
                }
                else {
                        console.log(precio_con_interes);
                }

        }

        else {
                if (ingresar_valor != "SALIR") {
                        alert("Solo puedes ingresar '1' o '2', para salir ingrese 'SALIR'")
                        continue;
                }
                else {
                        alert("Para volver a usarlo reinicie la pagina, gracias")
                }
        }
}