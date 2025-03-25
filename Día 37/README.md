# Contenido asíncrono vs sincrónico

La sincronía es la ejecución de tareas en un orden secuencial. Es decir, una tarea se ejecuta después de otra.

```js
console.log("Paso 1");
traerDatos();
console.log("Paso 3");

function traedDatosa(){
    esperar(3000);
    console.log("Paso 2");
}

// Simulador de tiempo
function esperar(milisegundos){
    const start = new Date().getTime();
    whilse(new Date().getTime()- start < milisegundos)
}

```

La `asincronía` es la ejecución de tareas en orden no secuencial , es decir, Una tarea se puede ejecutar antes de que la anterior haya terminado.

La obtención de datos asíncronos se utilizan para:
- Traer información de DB (data base).
- Traer información de una API (Aplication Program Interface).
- Manipulación de nuestros propios archivos.

Para lograr una taera asíncrona, simplemente debemos enviar como parámetro, una función `callBlack` que se ejecutará al finalizar la tarea.


```js

console.log("Paso 1");
traerDatos();
console.log("Paso 3");

function traedDatosa(){
    setTimeout( ()=> {
        console.log("Paso 2");
    }, 3000);
};

```

En JS, debido a la ejecución ocurre en un solo hilo (callstack), la asincronía permite que el código siga corriendo mientras espera tareas lentas como leer archivos, o hacer solicitudes HTTP. Esto evita que la interfaz del usuario se congele mientras espera la respuesta.


## Funciones de Callback




## Ejercicio
Crear un código que muestre por consola:
1) Un comensal solicita a un camarero un entrante.
2) El camarero va a buscar el plato solicitado (asíncrona).
3) La persona toma un vaso de agua mineral mientras espera.
4) El camarero lleva el plato a la mesa.
5) La persona se come el plato.

```js

let plato="Ensalada";
console.log("1)un comensal solicita a un camarero un entrante", plato);
hacerPedido(plato, ()=>{
    console.log("4) El camarero lleva el plato a la mesa.");
    console.log("5) La persona se come el plato.");
})
console.log("3) La persona toma un vaso de agua mineral mientras espera.")

function hacerPedido(plato, callBack){
    console.log("2) El camarero va a buscar el plato solicitado: ", plato);

    setTimeout( ()=>{
        // luego de preparar el plato ejecuto la función de callBack
        callBack()
    }, 3000);
};


// https://www.lydiahallie.com/blog/event-loop
```
# Promesas

Una promesa es un objeto de JS que representa la `terminación` o el `fracaso` de una operación asíncrona.
Una promesa puede estar en uno de estos tres estados:
- Pendiente: cuando aún no se ha completado y no se sabe si se completará con éxito o no.
- Resuelta: (resolve) cuando se ha completado con éxito.
- Rechazada: (reject) cuando ocurre un error.


```js

const miPromesa = new Promise( (resolve, reject)=>{
    console.log("Ejecuta lo que te prometí");


    setTimeout(()=>{
        resolve("ÉXITO, presenté el proyecto");

        rejec("EROR, MI GITHUB NO FUNCIONÓ")
    }, 3000)
});

miPromesa.then(result => console.log(relust))
    .catch(error => console.log("tuve un error",error))
    .finally( () => console.log("Les pongo una calificación"))

```

Las promesas se pueden encadenar: 

```js

// terminar apuntes

miPromesa.then(result => { // result = 5
               return result+3;
         })
          console.log(relust)
         .then(result => {

         } console.log(relust))
         .then(result => {

         } console.log(relust))
         .catch(error => {

         } console.log("tuve un error",error))
         .finally( () => console.log("Les pongo una calificación"))

```


## Fetch API con .then() y .catch()

Uno de los usos fundamentales de las promesas es en el uso de la Fetch API para realizar `peticiones HTTP` a otros servidores.

La función `fetch()` nos permite hacer una petición, y no sdevuelve una promesa.

Los `then` ...


```js

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then( response => response.json() ) // convertir nuestra respuesta a JSON
    .then( datos => {
        console.log(datos.name)
    })

```


Ejercício: Obtener 10 usuarios de la página de JsonPlaceholder, y mostrar en html una tarjeta para cada uno.

```js

// terminar

fetch("https://jsonplaceholder.typicode.com/users/")
    .then( response => response.json() ) // convertir nuestra respuesta a JSON
    .then( nombres => {
        console.log(nombres.name)
    })


```

