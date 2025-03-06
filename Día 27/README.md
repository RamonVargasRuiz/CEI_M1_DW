# Manipulación de textos

1. Concatenar

```js
const nombre="Lucía"
const apellido="Perez"

//usando interpolación

const nombreCompleto = nombre + " " + apellido // Lucía Pérez
const fullName = apellido + ", " + nombre // Perez, Lucía

// Concatenar usando +=
let saludo = "Hola, ";
saludo += "¿Cómo estas?";

console.log(saludo) // Hola, ¿cómo estas?

```

2. Interpolación

Cunado usamos palntillas literales (`template literals` / template Strings), se pueden insertar `variables` o `exprsiones` dentro de una cadena de texto usando `${}`.

```js

let nombre ="Lucia";
let edad = 25;

const FullName = `${apellido}, ${nombre}`; // Pérez, Lucía


// Interpolación //se puede usar el enter con la interpolación.
let mensaje = `Hola, mi nombre es ${nombre} y  tengo ${edad} años.`;

//concatenación (hacer)
let mensaje = `Hola, mi nombre es ${nombre} y  tengo ${edad} años.`;

// insertar expresión
const total=50;
const iva=0.21;
consloe.log(`El total con impuestos es ${total + (total*iva) }`);


const hobbies = ["futbol" , "basket" , "Programación de JS"];

const texto= "El total con impuestos"; // Un texto no deja de ser una lista de letras
```

3. Métodos de Strings

JS nos ofrece múltiples métodos/funciones para manipular cadenas de texto.

- `toUpperCase()` y `toLowerCase()`
Convierte todas las letras de una cadena en mayusculas o minúsculas.

- `split()`
Divide una cadena de texto en una lista/array basada en el separador elegido.

- `slice()`
Podemnos extraer una porción de la cadena basada en índices de inicio y fin (sin incluir el indice final).

- `replace()`y `replaceAll()`
Reemplaza una parte de la cadena por otra (la primera ocurrencia).
Soporta expresiones regulares(regex) para potencial la búsqueda.
No cambia todo, solo la primera que encuentre. repleaceAll si cambia todas.

- `trim()`
Elimina todos los espacios en blanco al início y al fin de la cadena.

- `includes()`
Verifica si una cadena tiene una subcadena específica.

- `startsWith()` y `endsWith()`
Verifica si una cadena comienza o termina con una subcadena específica.

- `repeat()`
Repite una cadena un número específico de veces.

```js

let texto = "Me encanta Javascript";

// toUpperCase() , toLowerCase()

console.log(texto.toLowerCase()); // me encanta javascript
consloe.log(texto.toUpperCase()); // ME ENCANTA JAVA SCRIPT


// split()

const palabras = texto.split(" ");
console.log(palabras); // ["Me", "encanta", "Javascript"]
const palabras2=texto.split(" encanta ");
console.log(palabras2); // ["Me", "Javascript"]
const email="maria@alumnos.cei.es";
const separacion = email.split("@");
console.log(separacion); // ["maria", "alumnos.cei.es"]

// Slice()

let frase = "Aprender Javascript es divertido";
console.log("Parte de la frase: " frase.slice(9,19)); // javascript
console.log("Desde el índice 9 al final: ", frase.slice(9)); // javascript es divertido

// replace()
let frase="Hola mundo. hola hola hola hola universo";
console.log("Reemplazar 'hola' por 'Hola': ", frase.replace("hola","Hola")); // cambia la primera que encuentre
console.log("Reemplazar 'hola' por 'Hola': ", frase.replaceAll("hola","Hola")); // Hola mundo. Hola Hola Hola Hola universo


// trim()

let frase = "      Hola mi nombre es Luka   ";
console.log(frase.trim()); // "Hola mi nombre es Luka"
// Los espacios de enmedio los ignora

// includes

let frase = "El sol brilla en el cielo";
console.log("Contene la palabra 'sol'?" + frase.includes("sol")); // True
console.log("Contene la palabra 'Luna'?" + frase.includes("sol")); // True

// startsWith y endsWith

let frase="Javascript es genial";
console.log("¿Empieza con 'Java':", frase.startWith("Java")); //True
console.log("¿Empieza con 'java':", frase.startWith("java")); //False
console.log("¿Termina con 'genial':", frase.endsWith("genial")); //True

// repeat
let risa="ja";
console.log("Me causa mucha risa:", risa.repeat(3)); //jajaja

let frase="Hola Como Andan";
console.log(frase.length); //15

```

Podemos combinar los métodos

```js

let frase="     No me gusta Javascript en diseño web    ";

// ME ENCANTA JAVASCRIPT EN DISEÑO WEB

// Usaremos: trim (), toUpperCase(), replace()

let resultado = frase .trim()                               // elimina espacios delante y detrás
                      .replace("No me gusta","me encanta") // Sustituye unos valores por otros
                      .toUpperCase();                     // Lo pasa a mayusculas

```



