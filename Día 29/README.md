## Operación ternaria
`cuando es un if...else común, se recomienda usar estas.`

Una fomra de reescribri el `if...else`. Se componen de tres partes: 

1. Una expresión que se evalua
2. Expresión que se ejecuta en el caso de ser cierta
3. Expresión que se ejecuta en el caso de ser falsa

Simplifica la legibilidad, pero no se recomienda para anidar operaciones, o cuando el resultado de la opercación es muy complejo.

- No se puede  utilizar ternarias si no tengo el `else...`
Tampoco se puede utilizar si es un `if...else` muy complejo.

```js
// Versión if...else
let numero = 10;
let mensaje;
if (numero % 2 == 0) {
        mensaje = "Es par"
} else {
        mensaje = "Es inpar"
}

// Versión ternaria
let mensaje = (numero%2 == 0) ? "Es par" : "Es impar" ;

// Versión if...else
if(edad >= 18){
    mensaje = "Es mayor de edad";
} else {
    mesnaje = "Es menor de edad";
}

// Versión ternaria
let mensaje = (numero >= 18 ) ? "Es mayor de edad" : "Es menor de edad" ;
let mensaje = numero >= 18 ? "Es mayor de edad" : "Es menor de edad" ;

mensaje = edad >= 18 ? "Es mayor de edad"
                     :  "Es menor de edad";

```

```js
// función que recibe 2 numeros y devuelve el mayor

// Versión if...else
function mayor(num1, num2) {
    if(num1>num2){
        return num1;
    } else {
        return num2;
    }
}

// Versión ternaria
function mayor(num1, num2) {
    return (num1 > num2) ? num1 : num2;
}

numMayor = mayor(5,3); // 5
numMayor = mayor(-5,7); // 7

```

 ## Actividad
 - Crear una función que reciba dos parámetros (jugador 1 y jugador 2), y que devuelva si el jugador1 le gana al jugador2 en "piedra", "papel", "Tijera".

 ```js

 // let player1 = [piedra, papel, tijera];
 // let player2 = [piedra, papel, tijera];

 function PPT(player1, player2) {
    return (player1 > player2) ? player1 : player2;
 }

let ganador = PPT("piedra", "tijera");


/// Corrección Tomás
function = PPT(j1,j2){


    // Caso empate
if(j1 === j2){ return "empate!";}

    // caso en que J1 tire "tijeras"

if( (j1 === "tijeras" && j2 === "piedra") ||
    (j1 === "piedra" && j2 === "tijeras") ||
    (j1 === "papel" && j2 === "piedra")

){

    return "Ganó Jugador 1";

} else {

    return "Ganó Jugador 2";

}};
 ```

 ## Recorrer Arrays/Listas

 ### ForEach
 - Recorrer cada item de un array, y ejecuta una función dentro del mismo array.
 - Se le asigan una variable a cada item.
 ejepmlo:
    listaAlumnos ->

 ```js
// bucle normal for
 for(i=0; letras.length ; i++){
    const letra = letras[i];
    console.log(letra);
 };


// bucle forEach
 const listaLetras = ["a","b", "c"];

 letras.forEach( (letra) =>{
    console.log(letra);
 });


 ```

 ### Modificar elementos con un forEach

 - Si queremos utilizar el indice podemos leerlo agregando un segundo parámetro a nuestra función flecha.

 ```js

 const listaLetras = ["a","b", "c"];

 listaLetras.forEach( (letra, indice) =>{
    console.log(letra, indice);
    listaLetras[indice] = letra.toUppercase();
 });

 console.log(listaLetras); // (3) ["A" , "B" , "C"]

 ```

 ### Map
 - Si deseamos genear una copia de la lista, podemos utilizar el método map(); el cual crea un nueva array con los resultados de la función flecha.

 ```js

const lista = [1,2,3,4,5];

const nuevaLista = listNumeros.map( (numero)=> { 
    return numero *2;
} );

console.log(listaNumero); // (5) [1,2,3,4,5]
console.log(nuevaLista); // (5) [2,4,6,8,10]
 ```


 