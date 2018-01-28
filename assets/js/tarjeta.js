$(document).ready(function() {
  $('#enviar_tarjeta').click(function() {
    if ($('#numero_tarjeta').val() === '') {
      $('#mensaje_vacio').html('<p>Introduzca un Número de tarjeta</p>');
    } else if (isNaN($('#numero_tarjeta').val())) {
      $('#mensaje_vacio').html('<p>Introduzca solo Números</p>');
    } else {
      isValidCard();
    }
  });

  $('#numero_tarjeta').keydown(function() {
    $('#mensaje_vacio').text('');
    $('#mensaje').text('');
  });
});

function isValidCard() {
  var tarjetaNum = $('#numero_tarjeta').val();//Obtener el valor del input
  var tarjeta = tarjetaNum.toString();// Convertir el valor en un string
  var codigoCard = null;// inicializar la variable en null
  var cifraCard = null;// inicializar la variable en null
  var suma = 0; // inicializar la variable suma en 0
  for (var i = 0; i < tarjeta.length; i += 2) {//recorro el string de dos en dos
    codigoCard = parseInt(tarjeta.charAt(i)) * 2;//Convierto de cádena a entero y los  valores los multiplico por 2
    if (codigoCard > 9) {//preguntar cuales valores son mayores a 9
      cifraCard = codigoCard.toString();// Los que sean mayores a 9  los convierto a string
      codigoCard = parseInt(cifraCard.charAt(0)) +//Los convierto a entero
              parseInt(cifraCard.charAt(1));//
    }
    suma += codigoCard;
  }
  for (var i = 1; i < tarjeta.length; i += 2) {
    suma += parseInt(tarjeta.charAt(i));
  }

//Mostar mensaje si el número de tarjeta es correcto o no
  if ((suma % 10) === 0) {
    $('#mensaje').html('<p>Número de tarjeta correcto</p>');
  } else {
    $('#mensaje').html('<p>Número de tarjeta incorrecto</p>');
  }
}