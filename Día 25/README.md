## Operador OR y AND

```js
const edad = 25;
const tienePermiso=true;

// para que cumpla ambas opciones usar &&
if(edad>=)


```

## formas de escribir funciones 

```js

// esta función tiene dos parámetros y devuelve la suma de ambos.

function sumar (num1, num2) {
    return num1+num2
}

// Este llamado a la función envía como "argumento" 2 numeros.

const resultado = sumar (2,3);
console.log(resultado);

// Función sin nombre.

const sumar = function(num1, num2){
    return num1+num2;
}

// función flecha (es la más importante).

const sumar = (num1,num2) => {
    return num1+num2;
}

// funcion flecha reducida (solo se puede utilizar si mi código tiene una sola línea).
// quitamos las llaves y quitamos la palabra return.

const sumar = (num1, num2) => num1+num2;

const saludar = (nombre) => {
    return "Hola como andas"+nombre+"?":
}

const saludar = nombre => "Hola como andas"+nombre+"?":


// -------------------------------------

const alumno = {
    nombre: "Juan"
    edad:34,
    sumar: function(num1, num2){
        return num1+num2
    }
}

alumno.sumar(3+1)


miBoton.addEvenListener("click", ()=> {
    console.log("Me hicieron Click");
});

```
## Truthy / Falsy

En JS podemos tener un valor Truthy o Falsy. Un valor Truthy es aquel que se evalúa como verdadero en un contexto booleano, mientras que falsy se evalúa como falso.

Podemos utilizar este concepto para la toma de decisiones en nuestro código.

Valores falsy: `undefined, null, Nan, 0, "", false`
Valores truthy: todos los demás.

Ejemplos de valores que parecen Falsy, pero que son truthy:
```js

// son todos TRUTHY!!!
const val="false";
const val=-1;
const val=" "; // tiene un espacio, es truthy
const val="0";
const val="null";
const val="undefined";

```


```js

if(edad>18){
    // truthy
} else {
    // falsy
}

let numero = 16;
if(numero%2 ==0){
    // truthy: es par
} else {
    // falsy: es inpar
}

if(""){
    console.log("No me ejecutan nunca");
} else {
    console.log("Si se Ejecuta!")
}

```


## Bucles

```js

for(let i=0;i< 10;i++ ){
    console.log(i);
}

let num=0;
while(num <10){
    console.log(num);
    num++;
}

num=99;
do {
    console.log(num);
    num++;
} while( num<10);

```


## Aviso nuevo para el ejercício del día 26