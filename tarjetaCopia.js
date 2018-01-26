function isValidCard(){

		var tarjetaCliente = prompt("Ingrese el número de Tarjeta"); 
		if(tarjetaCliente != ""){  
 		var tarjeta = tarjetaCliente.split("");
 		// convierto la variable tarjeta en un arreglo con split

 			// invierto el arreglo de atras hacia adelante
			for (var i = 0; i< tarjeta.length; i++){ 
			  var item = tarjeta.pop(); // Elimino el ultimo elemento con pop y luego lo devuelvo
			  tarjeta.splice(i,0,item); // agrego los nuevos elementos con el splice especificando el indice que es i
			 }                          // los elementos a borrar en este caso es 0 y el elemento a agregar en el array en este caso item

            //Determino que ubicacion del arreglo es par
            for (var i = 0; i< tarjeta.length; i++){ // recorro la palabra con un length
			  if (i % 2 == 0){                       // Determino si la ubicacion que me da i es par
			   var validar = parseInt(tarjeta[i]) * 2; // convierto el del indice de tarjeta en numero con parseInt que convierte string a número
			   	if (validar >=10) {  // pregunto si el resultado es mayor o igual a 10
			   	  var arr = validar.toString().split(""); // convierto el resultado numero en cadena  con el toString y luego lo introduzco en un arreglo
			   	  var total =  parseInt(arr[0]) + parseInt(arr[1]); // convierto los dos string de las posiciones en numero y los sumo
			   	  tarjeta[i] = total;  // le especifico que el indice de la tarjeta es igual a el total de la sumatoria de 0 y 1
                                       // Reemplazando el número anterior por el resultado que obtengo
			   	}
			   }
			  } 
            var sum = 0; // inicializo sum en cero para que me acumule la sumatoria de todos los valores
			for (var i = 0; i< tarjeta.length; i++){ 
				sum+= parseInt(tarjeta[i]);  // convierto tarjeta en numero con parseInt y sumo cada uno
			}
			if (sum % 10 == 0){ // pregunto si el residuo de toda la sumatoria es igual a 0 
				alert('Tarjeta Valida'); // si es cero la tarjeta es valida
			} else {
				alert('Tarjeta Invalida');
			}

		}
}
isValidCard();			
	