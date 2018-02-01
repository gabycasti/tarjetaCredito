
<h1>Validación de Tarjeta</h1>

<h5>Validar Campo de Número de Tarjeta</h5>

<ol>
    <li>Validar que no sea un campo vacio, preguntando si el campo es igual a vacio </li>
    <li>Validar que sean introducidos solo números, preguntando si el dato es de tipo númerico</li>
</ol>

<h5>Inicializar los mensajes</h5>

<ol>
    <li>Reiniciar los mensajes de advertencia validandolos cada vez que el usuario pulse una tecla</li>
</ol>

<h5>Función que Valida si el Númeo de Tarjeta es correto</h5>
<ol>
    <li>Asignar a la variable tarjeta_num el valor del input donde se introdujo el número de tarjeta </li>
    <li>Convertir el valor en una cadena para luego recorrerla</li>
    <li>Inicializar tres variables </li>
    <li>recorerr el string tarjeta de dos en dos </li>
    <li>ubicamos los números que ocupan una posición impar en el número de la tarjeta </li>
    <li>A estos números se le multiplica por dos. Si el número resultante es menor que nueve, se deja tal cual</li>
    <li>En caso contrario, se le resta nueve</li>
    <li>Se suman  todas las cifras del nuevo número obtenido.</li>
    <li>Si el número resultante es múltiplo de 10 es una tarjeta válida</li>
</ol>

![alt text](http://www.grupojega.cl/images/hover.gif)











