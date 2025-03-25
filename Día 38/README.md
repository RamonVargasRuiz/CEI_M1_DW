# Async / Await

La desventaja de la promesa es que suelven difíciles de entender cuando se anidan. Por eso se desarrolló `Async / Await`.
Es más fácil de leer y entender que las promesas con callback
agregamos async a la funcion y await a ...

## Ventajas
- Legibilidad: Se parece más al código síncrono tradicional, lo que facilita el seguimiento del flujo de ejecución.
- Manejo de errores: Con el uso de `try / catch` para manejar errores.
- Evitar "callback hell": Ayuda  aevitar el anidamiento excesivo de callbacks.



```js

async function traerDatos(){
    try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?users");
    const datos = await response.json();

    console.log(datos);
    console.log(datos[0]); //Los datos del primer usuário

    // simulamos un segundo request, trayendo los posts del primer usuario

    const responsePosts = await fetch (`https://jsonplaceholder.typicode.com/posts?userId=${datos[0].id}`);
    const datosPost = await responsePosts.json();
} catch (error){
    console.log("tuvimos un error: ", error);
}

}


// Otra manera de usar el async
const traerDatos = async () => {}

```



- Ejercicio: Tranforma este código en try / catch :




```js

// Versión promesa 

console.log(" 1) solicitar al camarero un plato de ensalada de atún");
pedirPlato("ensalada de atún");
console.log("3) la persona se toma el vaso de agua");
function pedirPlato(plato) {
    console.log("2) el camarero va a buscar el plato de comida: ", plato);
    fetch("http://restaurante.com/api/traerPlato")
        .then(response => response.json())
        .then(datos => {
            console.log("Paso 4: El camarero lleva el plato de :", datos.plato);
    console.log("Paso 5: El comensal se come su comida");
        })
        .catch(error => {
            console.log("No tenemos mas atún, lo siento");
        });
}

// Versión de Fetch con async / await

console.log(" 1) solicitar al camarero un plato de ensalada de atún");

pedirPlato("ensalada de atún");

console.log("3) la persona se toma el vaso de agua");


const  pedirPlato = async (plato) => {
     console.log("2) el camarero va a buscar el plato de comida: ", plato);

     try {

        const buscarPlato = await fecth (`http://restaurante.com/api/traerPlato/${plato}`)
        const miPlato = await buscarPlato.json();

        // qué hacer con esos datos
        console.log("Paso 4: El camarero lleva el plato de :", miPlato.plato);
        console.log("Paso 5: El comensal se come su comida");

     } catch (e) {

        console.log("No tenemos mas atún, lo siento");

     }

}
```