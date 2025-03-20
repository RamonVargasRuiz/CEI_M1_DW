## Actividad Music Player

1. Crear un array con 5 canciones, recorrer el array y mostrar en consola cada canción.
`https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3`

2. Crear un array con 5 artistas, cada artista corresponderá a su canción.

3. Mostrar en HTML un DIV para cada canción y artista generado con JS.

4. Crear un botón con el texto "Tema 3" que al hacer click muestre en consola el nombre de la canción y el artista en la posición 2.

5. Agregar botones de "siguiente" , "anterior", "play", "pausa" con id's únicos, y agregra el siguiente JS y explicar que hace ese código.

```js

document.addEventListener("click", (e) => {
    console.log(event.target.id);
})
```

6. Agregar un atributo ID a cada elemento generado en el punto 3, y hacer que al clickear en cada DIV muestre en consola el nombre de la canción y el artista.

7. Actualizar el punto anterior para mostrar en el HTML un párrafo con el nomre de la canción y el artista al que hicieron click.

8. Agregar un array con imágenes para cada canción.

9. Darle la función necesaria a los botones de "Siguiente" / "Anterior" para que pase de canción mostrando su correspondiente html.

10. Convertir los 3 array en un array de Objetos, y que el programa siga funcionando.