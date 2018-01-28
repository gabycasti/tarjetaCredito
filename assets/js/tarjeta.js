$(document).ready(function(){

$("#enviar_tarjeta").click(function(){
  if ($("#numero_tarjeta").val()==""){
 $('#mensaje_vacio').html('<p>Introduzca un Número de tarjeta</p>');
}else if (isNaN($("#numero_tarjeta").val())){
   $('#mensaje_vacio').html('<p>Introduzca solo Números</p>');
}else{
  isValidCard();
 }
});

$("#numero_tarjeta").keydown(function(){
  $('#mensaje_vacio').text('');
  $('#mensaje').text('');
})

  });

function isValidCard() {
 var tarjeta_num = $("#numero_tarjeta").val();
 var tarjeta = tarjeta_num.toString();
 var cifra = null;
 var cifra_cad=null;
 var suma=0;
 for (var i=0; i < tarjeta.length; i+=2){
   cifra = parseInt(tarjeta.charAt(i))*2;
   if (cifra > 9){ 
     cifra_cad = cifra.toString();
     cifra = parseInt(cifra_cad.charAt(0)) + 
parseInt(cifra_cad.charAt(1));
   }
   suma+=cifra;
 }
 for (var i=1; i < tarjeta.length; i+=2){
   suma += parseInt(tarjeta.charAt(i));
 }
  
 if ((suma % 10) == 0){ 
  $('#mensaje').html("<p>Número de tarjeta correcto</p>");
 } else {
  $('#mensaje').html("<p>Número de tarjeta incorrecto</p>");
 }
}

