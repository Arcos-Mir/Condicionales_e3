
/* Ejercicio 1 Pseudocódigo que lea como dato el sueldo de un trabajador, aplique un aumento del 15% si su sueldo es inferior a 1000 y 10% en caso contrario */

let salary = prompt("Ingresa tu salario");
let increase = 0.15;
let increase2 = 0.10;
let newSal = 0;
let n = 0;

if(salary < 1000) {
    console.log(salary);
    n = parseFloat(salary) * parseFloat(increase);
    newSal = parseFloat(salary) + parseFloat(n);
    alert("Tu nuevo salario es: " + newSal);
}else {
    n = parseFloat(salary) * parseFloat(increase2);
    newSal = parseFloat(salary) + parseFloat(n);
    alert("Tu nuevo salario es: " + newSal);
}

/* Ejercicio 2 El usuario debe ingresar 2 valores numéricos y la aplicación deberá indicar cual es el mayor, el priemro o el segundo */

let num1 = prompt("Ingresa un número");
let num2 = prompt("Ingresa otro número");

if(parseInt(num1) > parseInt(num2)) {

    alert(num1 + " " + " es mayor");
}else {
    alert(num2 + " " + " es mayor");
}

/* Ejericicio 3 el usuario debe entrar un número y su cuadrado, si es correcto el script enviará un mensje de acierto en caso cntrario dirá que se produko un error */

let number = prompt("Ingresa un número entero");
let number2 = prompt("Ingresa el cuadrado del número anterior");

if(Math.pow(number, 2) === parseInt(number2)) {

    alert("es correcto");
}else {
    alert("Es incorrecto");
}

/* Ejercicio 4 en este caso , usando tambien el operador ternario o if reducido, un visitante a la página deberá teclear su edad, si es igual o mayor a 18 recibirá el mensaje de "Entra", en caso contario deberá decirle los años que tiene que esperar para entrar */

let age = prompt("Ingresa tu edad");
let adult = 18;
let wait = 0;

if(age >= adult) {

    alert("Bienvenido!!! puedes entrar");
}else {

    wait = parseInt(adult) - parseInt(age);
    alert("Espera" + " " + wait + " " + "años");
}

/* Ejercicio 5 en un restaurante los clientes pueden pedir menú de carne, pescado o verdura. Si pide crane se le ofrecera la bebida vino tinto, si pide pescado se le ofrecerá vino blanco y si pide verduras se le ofrecerá agua, si no elije el mnú de la lista aparecerá la frase elija carne, pescado o verduras*/

let menu = prompt("Menú: carne, pescado o verduras... ¿Qué le gustaría pedir?");

if(menu === "carne") {
    alert("¿Desea beber vino tinto?");
}else if (menu === "pescado") {
    alert("¿Desea beber vino blanco?")
}else if (menu === "verduras") {
    alert("¿Desea beber agua?");
}else {
    alert("Elija carne, pescado o verduras");
}

/* Ejercicio 6 En una sala de juegos existen 3 salas, Consolas, juegos 2D, juegos 3D, realidad virtual. si un usuario paga4 créditos puede acceder a todas, si paga 3 solo podrá acceder a las 3 primeras, si paga 2 a las 2 primeras y si paga 1 solo a la primera */

let credit = prompt("Esta es un área de juegos y tenemos 4 salas: consolas, juegos 2d, juegos 3d y realidad virtual: ¿Cuántos créditos te guistaría pagar?");

if(credit === "1") {
    alert("Bienvenido a la sala de Consolas!!!");
}else if(credit === "2"){
    alert("Bienvenido a la sala de Consolas y Juegos 2D!!!");

}else if(credit === "3") {
    alert("Bienvenido a la sala de Consolas, Juegos 2D y 3D!!!");

}else if(credit === "4") {
    alert("Bienvenido a la sala de Consolas,Juegos 2D, 3D Y Realidad Virtual!!!");

}else {
    alert("Elije un pago de credito válido del 1 al 4!!!");
}


/* Ejercicio 7 a partir de un número de mes tecleado por un usuario el programa debe indicar la estacion del año, las estaciones serán 12, 1, 2: invierno , 3,4,5: primavera; 6,7,8 verano; 9,10,11 otoño*/

let season = prompt("Escribe un número y te diré en que estación del año estamos");

if (season === "12" || season === "1" || season === "2") {
    alert("Estamos en Invierno");
}else if (season === "3" || season === "4" || season === "5") {
    alert("Estamos en Primavera");
}else if (season === "6" || season === "7" || season === "8") {
    alert("Estamos en Verano");
}else if (season === "9" || season === "10" || season === "11") {
    alert("Estamos en Otoño");
}else {
    alert("Ingresa un número entre 1 y 12");
}

/* Ejercicio 8 el usuario ingresa la longitud de la base y el alto de un cuadrado, si la base y el alto son  identicos la respuesta será "es un cuadrado", si la base es mayor que el alto dirá "es un rectángulo horisontal" y en caso contrario dirá "rectángulo vertical" */

let n1 = prompt("ingresa la longitud de la base de la figura");
let n2 = prompt("ingresa el alto de la figura");

if(n1 === n2) {
    alert("Es un cuadrado");
}else if (n1 > n2) {
    alert("Es un Rectángulo Horizontal");
} else {
    alert("Es un Rectángulo Vertical");
}

/* Ejercicio 9 en una tienda de coches se quiere dirigir a un cliente hacia una sección de acuerdo al tipo de coche que elija. si elije tipo gasolina o 1 se le enviará a la ofifina número 100. si elije tipo diesel o 2 ira a la oficina 200 y si elije tipo eléctrico o 3 se le enviará a la oficina 300 */

let car = prompt("¿Qué tipo de coche te gustaría elejir? gasolina ó 1; diesel ó 2; eléctrico ó 3, te atenderemos con gusto!");

if(car === "gasolina" || car === "1") {
    alert("Por favor vaya a la oficina 100");
}else if (car === "diesel" || car === "2") {
    alert("Por favor vaya a la oficina 200");
}else if (car === "eléctrico" || car === "3") {
    alert("Por favor vaya a la oficina 300");
}else {
    alert("Por favor elija una opción válida");
}

/* Ejercicio 10 un comerciante hace descuentos a sus clientes de la siguiente forma: 
si ha comprado menos de 100 euros no hay descuento
si la compra esta entre 100 y 300 euros le descuenta un 5%
si la compra está por encima de 300 hasta 500 euros le descuenta un 10%
si la compra supera los 400 euros le descuenta un 15% */

let cant = prompt("Ingresa la cantidad total de la compra");
let desc1 = 0.05;
let desc2 = 0.10;
let desc3 = 0.15;
let total = 0;
let tPay = 0;

if (parseInt(cant) < 100) {

    alert("total a pagar: " + " " + cant);
}else if (parseInt(cant) > 100 && parseInt(cant) <= 300) {

    total = parseInt(cant) * desc1;
    tPay = parseInt(cant) - total;
    alert("total a pagar: " + " " + tPay)
}else if (parseInt(cant) > 300 && parseInt(cant) <= 500) {

    total = parseInt(cant) * desc2;
    tPay = parseInt(cant) - total;
    alert("total a pagar: " + " " + tPay);
}else if (parseInt(cant) > 500 ) {

    total = parseInt(cant) * desc3;
    tPay = parseInt(cant) - total;
    alert("total a pagar: " + " " + tPay);
}else {
    alert("Ingresa una cantidad válida");
}

