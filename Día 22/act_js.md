## Ejercicio 1: Creación y acceso a arrays

- Crea un array llamado frutas que contenga las siguientes frutas: "Manzana", "Banana", "Naranja".
- Imprime en la consola el primer elemento del array frutas.
- Cambia el segundo elemento del array frutas a "Mango".
- Imprime en la consola el array completo para verificar el cambio.
 ```js

    const frutas = ["Manzana" , "Banana" , "Naranja"];

    console.log( frutas[0]);

    frutas[1] = "Mango";

    console.log(frutas);
    frutas.log(frutas.lenght);

 ```


## Ejercicio 2: Creación y acceso a objetos

- Crea un objeto llamado persona con las propiedades nombre (string), edad (número) y ciudad (string).
- Imprime en la consola el valor de la propiedad nombre del objeto persona.
- Cambia el valor de la propiedad edad a 30.
- Imprime en la consola el objeto persona completo para verificar el cambio.

```js

const persona = {nombre: "julio", edad: "57", ciudad: "Murcia"};

console.log(persona.nombre);

persona.edad = 30;

console.log(persona)



```



## Ejercicio 3: Arrays de objetos

- Crea un array llamado estudiantes que contenga tres objetos, cada uno representando a un estudiante con - las propiedades nombre y nota.
- Imprime en la consola el nombre del segundo estudiante.
- Cambia la nota del primer estudiante a 95.
- Utiliza un bucle for para imprimir el nombre y la nota de cada estudiante en la consola.

## Ejercicio 4: Métodos en objetos

- Crea un objeto llamado calculadora con las propiedades a y b (números) y un método sumar que retorne la suma de a y b.
- Asigna valores a a y b y llama al método sumar, imprimiendo el resultado en la consola.