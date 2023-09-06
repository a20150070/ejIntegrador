alert("Bienvenidos al restaurante, su cuenta es:")
//Ingresar datos
var entrada = parseInt(prompt("Ingrese el costo de la entrada"));
var plato = parseInt(prompt("Ingrese el costo del segundo"));
var postre = parseInt(prompt("Ingrese el costo del postre"));
//Procesar datos
var suma= entrada+plato+postre;
var total= suma+(suma*0.18)
alert("Presione la tecla F12 para mostrar los resultados")
//Mostrar Datos
console.log("El costo de la entrada es: "+entrada);
console.log("El costo del segundo es: "+plato);
console.log("El costo del postre es: "+postre);
console.log("El costo total es: "+ suma);
console.log("El costo total más el IGV es: "+ total);