
<<<<<<< HEAD
# Métodos de Arrays / Listas

## Pop()
El método `pop()` elimina el útimo elemento de un array, y lo devuelve.
Este método modifica la longitud del array.

```js
let frutas = ["manzana", "naranja" , "tomate" , "uvas" , "banana"];
let ultimoElemento = frutas.pop();

console.log(frutas); // (4) ["manzana", "naranja" , "tomate" , "uvas" , "banana"]
console.log(ultimoElemento); // "banana"

```

## Push()
El método `push()` es uno de los más comunes, añade uno o mas elementos al final de un array. Me devuelve la nueva longitud del array.

```js
const frutas = ["manzana" , "naranja"];
let nuevaLongitud = frutas.push("pera" , "tomate" , "sandía");

console.log(frutas); // (4) ["manzana" , "naranja" , "pera" , "tomate" , "sandia"];

console.log(nuevaLongitud); // 5

```

## shift()
el método `shift()` elimina el primer elemento del array y lo devuelve. Este método modifica la longitud del array.


```js
let frutas = ["manzana", "naranja" , "tomate" , "uvas" , "banana"];

let elementoQuitado = frutas.shift();

console.log(frutas); // (4) ["manzana", "naranja" , "tomate" , "uvas" , "banana"];
console.log(elementoQuitado); // "manzana"

```

## Unshift()
Con el método `unshift()` podemos añadir uno o más elementos al inicio del array. Devuelve la nueva longitud del array.

```js

const fruta = ["manzana" , "naranja" , "tomate"];
let nuevaLongitud = frutas.unshift("pera" , "ciruela");

console.log(frutas); // (5) ["pera" , "ciruela" , "manzana" , "naranja" , "tomate"];
console.log(nuevaLongitud); // 5

```

## Splice()
El método `splice()` cambia el contenido de un array eliminando, creando o reemplazando sus elementos. Modifica el valor original y recibe 3 parámetros. Devuelve los elementos eliminados.

- El índice del vector donde se va a realizar la operación
- La cantidad de elementos a eliminar
- Los elementos que quiero agregar


```js

const frutas = ["manzana" , "naranja" , "tomate" , "uvas" , "bananas"];
let frutasEliminadas = frutas.splice(2, 2, "pera", "ciruela");

console.log(frutas); // ["manzana" , "naranja" , "pera", "ciruela" , "bananas"]
console.log(frutasEliminadas); //  ["tomates" , "uvas"]

```

- Ejercício

```js
let lenguajes = ["python" , "java" , "javascript" , "php" , "C++" , "C#" ];

lenguajes.splice(0,-1); // Elimina el primer elemnto del Array (shift()) ... quita Python
lenguajes.splice(-1,1); // Elimina el último elemento del array(pop()...) quita "C#"
lenguajes.splice(-1,0,"C","Cobol"); // Se posiciona al final, no borra nada, y agrega "C" y "Cobol".

// quita 2 elementos a partir del indice 2
lenguajes.splice(2,2);
```

## ForEach

el forEach recorre cada elemento de una lista, y ejecuta la función indicada dentro del mismo.

```js

["a", "b", "c"].forEach( (letra)=>{
    console.log(letra);
});

```

## Map

Devolver el doble de cada elemento:

```js

const listaNumeros = [5,15,7];
const listaNumerosDobles = listaNumeros.map( (num) => {
    return num*2;
});

console.log(listaNumerosDobles); // [10,30,14]

```

## OPTIMICACIÓN DE MÉTODOS DE ARRAY

```js

// si nuestra función flecha tiene un solo valor, podemos quitarle el paréntesis

const listaNumerosDobles = listaNumeros.map( num => {
    return num*2;
});


//si mi funxión es de una sola línea y esa línea es un return, podemos quitar llaves rosas, return y punto y coma

// se puyede optimizar cuando nuestra función tiene una sola linea y esa linea es un return (explicación tomás)

const listaNumerosDobles = listaNumeros.map( num => num*2);

```

## Buscar Items

### Find()

El método `find()` devuelve el PRIMER elemento del array que cumpla la función de prueba proporcionada. En caso contrario devuelve undefind.


```js

const numeros = [5,12,8,130,44,12];
const item = numeros.find( num => num > 10  )

```

### Filter()

La función `filter()` devuelve un array/lista con TODOS LOS ELEMENTOS que cumplan la condición específica.

```js

const numeros = [5,12,8,130,44,12];
const listaItem = numeros.filter (num => num > 10);

console.log(listaItems); // [12 , 130 , 44 , 12]

// El find devuelve un elemento y fliter devuelve un array.

const personas = [
    {nombre: "Juan", edad: 33},
    {nombre: "Pedro", edad: 18},
    {nombre: "Ana", edad: 15},
    {nombre: "Luis", edad: 9},
    {nombre: "María", edad: 30},
];

const ListaMayores = personas.filter(persona => persona.edad >= 18);

console.log(ListaMayores); // [ {nombre: "Juan", edad: 33}, {nombre: "Pedro", edad: 18}, {nombre: "María", edad: 30}]

```

- Ej:
1. De una lista de numeros, devolver solo los IMPARES.

```js

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const impares = numeros.filter(num => num % 2 !== 0);

console.log(impares); // [1, 3, 5, 7, 9]

```

2. De una lista de personas, devolver los nombres.

const personajes = [
    {nombre: "Juan", edad: 33}, 
    {nombre: "Pedro", edad: 18}, 
    {nombre: "María", edad: 30}
];

```js

const personajes = [
    {nombre: "Juan", edad: 33}, 
    {nombre: "Pedro", edad: 18}, 
    {nombre: "María", edad: 30}
];

const nombres = personajes.map(persona => persona.nombre);

console.log(nombres); // ["Juan", "Pedro", "María"]

```

3. Encuentra un libro con el título específico (buscar "La Odisea")

const libros = [
    { titulo: 'El Quijote', autor: 'Miguel de Cervantes'},
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez'},
    { titulo: 'La Odisea', autor: 'Homero'},
]


```js

const libros = [
    { titulo: 'El Quijote', autor: 'Miguel de Cervantes'},
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez'},
    { titulo: 'La Odisea', autor: 'Homero'},
];

const libroBuscado = libros.find(libro => libro.titulo === "La Odisea");

console.log(libroBuscado); // { titulo: 'La Odisea', autor: 'Homero' }

```

3.b) Usar los métodos de string para buscar la clase "cien años".

```js

const libroEncontrado = libros.find(libro => libro.titulo.toLowerCase().includes("cien años"));

console.log(libroEncontrado); // { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez' }

```

4. Dado una lista de números desordenadpos, ordena de mayor a menor (investigar).


```js

const numerosDesordenados = [5, 2, 9, 1, 7, 3, 8, 6, 4];

const ordenados = numerosDesordenados.sort((a, b) => b - a);

console.log(ordenados); // [9, 8, 7, 6, 5, 4, 3, 2, 1]

```
=======
# Día 32

## Listeners para eventos del usuario

Son funciones que se ejecutan en respuesta a eventos específicos que ocurren en el DOM, como por ejemplo clicks, movimientos del mouse, teclas presionadas, teclas levantadas, etc. Para agregar un evento usamos `addEventListener(evento,función)`.

```js
// selector item DOM
const boton = document.querySelector("button");

// agregar un event listener para el evento de click
boton.addEventListener("click" , () => {console.log("HOLA")});
boton.addEventListener("click" , miFuncion );

function miFuncion(){
    console.log(`HOLA`);
}
```

## Pasar parámetros a funciones con eventos

A veces necesitamos enviar parámetros adicionales a la función que maneja el evento.

```js
boton.addEventListener("click", function(){
    miFunction("Tomi");
})

boton.addEventListener("click", () => miFunction("María")); // ejecutar la función enviando parámetros, la debo meter dentro de una función flecha.
boton.addEventListener("click" , miFuncion ); // ejecutar la función sin enviar parámetros.

function miFuncion(usuario){
    console.log(`HOLA ${usuario}`);
}
```

EJercicio: 
1. Cambiar el color de un elemento al hacerle click:
Crear dos botones (rojo y azul) que cambie el color de fondo de un bloque al hacerle click. La función de cambiar de color tiene que ser la misma.
2. Mensaje al pasar el mouse:
Crear un elemento que muestre un mensaje cuando el ratón pase por encima de él.

### Parámetro "e" (event/evento)

Es un objeto que contiene información sobre el evento ocurrido. Este se pasa automáticamente a la función que maneja el evento.

```js
function handleClick(e){
    console.log("El botón ha sido clickeado");
    console.log("Coordenadas del mouse: ", e.clientX, e.clientY);
}
boton.addEventListener("click", handleClick);

```

Ejercicio 3:

Formulario de entrada:
Crear un formulario que valide la entrada de un usuario, y muestre en pantalla si la entrada no es válida.