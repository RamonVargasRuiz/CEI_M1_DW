## Variables  Referenciales vs Primitivas

Primitivo es la cubeta donde guardamos algún dato. ` strings, Numeros, Booleanos`, y otros...
Referenciales es la llave del camión (no el camión), donde guardamos muchos datos. `Òbjetos o Arrays`. Estos son siempre `const`.

```js
const num=25;

num=30 // ERROR no se puede modificar una constante.

const alumnos=["Juan","Maria","Pedro"];
alumnos[0]="Tomás"; // OK se puede modificar el contenido de un array.
```

## Comentarios en JS

- Comentario simple: se utiliza `//` para una sola linea
- comentario simple en linea: puede usarse `//` al final de la línea
- comentario en bloque: ` /* ....... */ ` para hacer comentarios en múltiples líneas.
- Comentario de Documentación: Se utiliza `/** ....... */` para iniciar un bloque informativo. Se usa mucho para funciones.

ascii arti


```js


// 1 sola line
let nombre="Juan"; // 1 sola linea al final del código

/*

Soy un comentario
de varias líneas
:D

*/
// JSDOC
/**
 * Esta es una función que suma dos numeros.
 * 
 * @param {number} num1 - El primer número
 * @param {number} num2 - El segundo numero
 * @return {number} - La suma de num1 y num2
 * 
 *  */
function sumar (num1, num2){
    return num1+num2;
}
```

## Operadores aritméticos

Tenemos operadores de asignación, comparación y lógicos.

Los aritméticos más comunes son:

- Suma "+": suma dos valores
- Resta "-": Resta dos valores
- Incrementar un valor "++": Invcrememntar el valor de una variable
- Decrementar el avlor  de un avariable "--": decrementa el valor de una variable
- Multiplicación "*"
- División "/"
- Modulo "%": El resto de la división de dos valores

```js

let a=10;
let b=5;

let suma = a+b;             // 15
let resta = a-b;            // 5
let multi = a+b;            // 50
let divi = a/b;             // 2
let modulo = a%b;           // 0
let incrParaA = a++;        // 11
let incrParaB = b++;        // 6
let decrParaA = a--;        // 9
let decrParaB = b--;        // 4


```

## Símbolos comparativos

- `==` Para ver si son iguales
- `===` Si son iguales estrictamente (el mismo valor y el mismo tipo)
- `!=` Para ver si son distintos
- `!==` Para ver si no son estricatmente iguales
- `<` Para ver si es mayor
- `>` Para ver si es menor
- `<=` Para ver si es menor o igual que
- `>=` Para ver si es mayor o igual que



