//*var

/* var color = "Amarillo"
var color = "Blue"

console.log(color) */


//let
/*  let nombre = "carlos"
nombre = "Pedro"

//let nombre = "Luis" //incorrecto

let fruta
fruta = "piña"

console.log(typeof fruta)  */

//const

/* const color = 'blanco'
color = 'verde' // No es permitido

console.log(color) */


//Operadores matemáticos

/* let shots = 2

console.log( 6 + 4 + 23 )
console.log("Tus shots son: " , shots)

let msj = "Tus shots son: " + shots */

/* let num1 = Number( prompt("Dame un número 1") ) 
let num2 = Number( prompt("Dame un número 2") ) 
console.log( num1 + num2 )*/

//console.log(4 * "cinco") //NaN: Not a Number

/* let shots = 3
shots++
shots++
shots++
shots += 3
shots --
shots --


console.log(shots) */

//Operadores de comparación

// == : evalúa solo valor 
// === : evalúa valor y tipo de dato (recomendable)

//console.log( 3 !== "3" )

/* let numerouno = prompt( "pon un numero" )
let numerodos = 6

console.log(numerouno === numerodos) */

//Para entrar a VIP debes llamarte mario y tener más de 18 años
/* let edad = 10
let nombre = 'MaRiO'.toLowerCase()
 */
//.toLowerCase() : Transforma cadena de caractéres en minúscula
//.toUpperCase() : Transforma cadena de caractéres en mayúscula

//console.log( edad >= 18 || nombre === "mario")



//Condicional if

/* let color = prompt("dime un color").toLowerCase()

if( color === "azul" ){
    console.log("Adivinaste el color! 😊")
}else if(color === "rojo"){
    console.log("Te ganaste una fresa")
}else if(color === "amarillo"){
    console.log("Te ganaste una piña")
}else{
    console.log("Perdiste :(")
}
 */


//Condicional para calificar la nota de estudiante

//Variables

//Nombre de estudiante
let nombre = prompt("Registra el nombre del estudiante").toLowerCase()
//Nota registrada
let nota = prompt("Registra la calificación")

//Lógica
if ( nota >= 90 ){
    console.log(`El estudiante" ${nombre}, "obtiene un Excelente!🤠`)
}else if ( nota < 90 && nota >= 75 ){
    console.log(`El estudiante" ${nombre}, "obtiene un Bien!🙌`)
}else if ( nota <75 && nota >= 60 ){
    console.log(`El estudiante" ${nombre}, "obtiene un Suficiente😮‍💨`)
}else if ( nota <60 ){
    console.log(`El estudiante" ${nombre}, "no aprueba 😢`)
}