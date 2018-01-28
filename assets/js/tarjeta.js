$(document).ready(function(){

$("#enviar_tarjeta").click(function(){
  isValidCard()
});

  });

function isValidCard() {
 var tarjeta_num = $("#numero_tarjeta").val();
 var cadena = tarjeta_num.toString();
 var cifra = null;
 var cifra_cad=null;
 var suma=0;
 for (var i=0; i < cadena.length; i+=2){
   cifra = parseInt(cadena.charAt(i))*2;
   if (cifra > 9){ 
     cifra_cad = cifra.toString();
     cifra = parseInt(cifra_cad.charAt(0)) + 
parseInt(cifra_cad.charAt(1));
   }
   suma+=cifra;
 }
 for (var i=1; i < cadena.length; i+=2){
   suma += parseInt(cadena.charAt(i));
 }
  
 if ((suma % 10) == 0){ 
  $('#mensaje').append("<p>Número de tarjeta correcto</p>");
 } else {
  $('#mensaje').append("<p>Número de tarjeta incorrecto</p>");
 }
}

/*function isValidCard() {
  //var tarjetaCliente = prompt('Ingrese el número de Tarjeta'); 
  var tarjeta_num = $("#numero_tarjeta").val();
  alert('tarjeta_num');
  if (tarjeta_num !== '') {  
    var tarjeta = tarjeta_num.split('');
    // convierto la variable tarjeta en un arreglo con split

    // invierto el arreglo de atras hacia adelante
    for (var i = 0; i < tarjeta.length; i++) { 
      var item = tarjeta.pop(); // Elimino el ultimo elemento con pop y luego lo devuelvo
      tarjeta.splice (i, 0, item); // agrego los nuevos elementos con el splice especificando el indice que es i
    }/*
     * Los elementos a borrar en este caso es 0 y el elemento a agregar en el array en este caso item
     * Determino que ubicacion del arreglo es par
    */
    /*for (var i = 0; i < tarjeta.length; i++) {// recorro la palabra con un length
      if (i % 2 === 1) { // Determina si la posición que me da i es par
        var validar = parseInt(tarjeta[i]) * 2;// convierto el strin a número
        tarjeta.splice(i, 0, tarjeta[i]); // guardo el nuevo valor multiplicado por 2 del indice
        // convierto el string a número y lo multiplico por 2
        if (validar >= 10) {// pregunto si el resultado de la multiplicacion es mayor o igual a 10
          var arr = validar.toString().split(''); // los separo para poder sumar por separado convierto el resultado numero en cadena  con el toString y luego lo introduzco en un arreglo con el split
          var total = parseInt(arr[0]) + parseInt(arr[1]); // convierto los dos string de las posiciones en numero y los sumo
          tarjeta[i] = total;// le especifico que el indice de la tarjeta es igual a el total de la sumatoria de 0 y 1
          // Reemplazando el número anterior por el resultado que obtengo
        }
      }
    } 
    var sum = 0; // inicializo sum en cero para que me acumule la sumatoria de todos los valores
    for (var i = 0; i < tarjeta.length; i++) { 
      sum += parseInt(tarjeta[i]);// convierto tarjeta en numero con parseInt y sumo cada uno
    }
    if (sum % 10 === 0) { // pregunto si el residuo de toda la sumatoria es igual a 0 
      alert('Tarjeta Valida'); // si es cero la tarjeta es valida
    } else {
      alert('Tarjeta Invalida');
    }
  }
}
isValidCard();*/

