# CSS GRID

`https://cssgridgarden.com/#es`
`cssgridgenerator.io``


Grid es un sistema de maquietación bidimensional para crear intrefaces y layouts tipo tablas.
Se compone de filas y columnas y se pueden anidar unos dentro de otros.
Una de las ventajas qu etiene es que s epueden cread layouts complejos con muy pocas líneas de código.

- Nos sirve para crear layouts.
- No es opuesto a Flex (se pueden combinar; no hay uno mejor).
- Grid si sustituye a las <tables> para el armado de layouts.

Utilizamos `display: grid`para crear un grid y `grid-template-columns`y `grid-template-rows`para definir el número d efilas y columnas.

```CSS

/*Layout de 3 x 3*/
.container{
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
}

```

Pueden visualizar el layout de grid desde la consola de chrome.

Podemos indicar a acada item dónde posicionarlo usando `grid-rowstart`, `grid-row-end`, `grid-colum-start` y  `grid-column-end`; teniendo en cuenta que las filas y columnas comienzan en 1 (no en 0).

Si queremos que ocupe 3 columnas y 1 fila, debemos indicar que comience en la columna 1, y termine en la columna 4. Y que la fila comiensce en la 1 y termine en la 2.

```CSS

.item-1{
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
}

```

Se puede invertir el start y el end y funcionará igual.

```CSS

.item-1{
    grid-column-start: 4;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 1;
}

```

Se pueden utilizar valores negativos para seleccionar elementos desde el final de grid.

```CSS

.item-1{
    grid-column-start: 1;
    grid-column-end: -1;
    grid-row-start: 1;
    grid-row-end: -1;
}

```

En vez de seleccionar la final /columna de destino, podemos utilizar span para indicar cuántas filas/columnas queremos en un item.

```CSS
/* Item de 3 col y 1 fil */

.item-1{
    grid-column-start: 1;
    grid-column-end: span 2;  /* Se amplia un bloque mas */
    grid-row-start: 1;
    grid-row-end: span 3; /* Se amplia 2 bloques mas */
}

```

Para reducir grid-column-start y grid-column-end en una sola linea, podemos usar `grid-column`. Lo mismo con `grid-row`.

```CSS

.item-2{
    grid-column: 1 / 3; /* col start / end */
    grid-row: 2 / 4; /* row start / end */
}

```

Podemos utilizar una forma más corta usando `grid-area`, donde definidmos `grid-row-start`, `grid-column-start`, `grid-row-end` y `grid-column-end`.

```CSS

.item-2{
    grid-area: 1 / 1 / 3 / 3;
}

```

Con Grid es muy fácil crear un elemento por encima de otro. Depende de la posición en HTML.

Podemos utilizar grid-gap para definir un espacio entre columnas y filas. El mismo soporta un valor para fila y columna, o 2 valores para diferenciarlos.


```CSS

/*Layout de 3 x 3*/
.container{
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
    grid-gap: 10px; /* separación entre filas y cols */
    grid-gap: 1em 3em; /* separación independiente para filas y para cols */
}

```

Existe la opción repeat que nos permite repetir el número de veces que quiero para una fila o columna.

```CSS
.container{
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(, 3em);
    grid-gap:2em;
}
```

Si agregamos más bloque s a lo largo de nuestro grid, se intentará ubicarlo en la primera posición libre disponible. Si no quedan posiciones libres, se creará una nueva fila. Estas nuevas celdas no tendrán el tamaño asignado en nuestro grid-template, y se llaman "grid-implicitas. Podemos usar `grid-auto-rows:100px`para deifinir el tamaño de nuestras nuevas filas."

```CSS
.container{
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(, 3em);
    grid-gap:2em;
    grid-auto-rows: 100px;
}
```

También existe el `grid-auto-flow`que nos permite definir si las nuevas celdas se crearán como filas o columnas.

```CSS
.container{
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 3em);
    grid-gap:2em;
    grid-auto-rows: 100px;
    grid-auto-flow: column;
}
```

Las unidades que podemos utilizar son px, %, em, rem, pero se le suma una nueva de valor fraccional, o `fr`. Este valor nos permite fraccionar el tamaño disponible.

Por ejemplo, si tenemos tres columnas y definimos que la primera columna tenga un tamaño de 1fr, la segunda de 2fr y la tercera de 1fr, la segunda columna ocupará el doble de espacio que las otras d2.

```CSS
/* layout col del medio ocupa 2x */
.container{
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: repeat(3, 3em);
    grid-gap:2em;
}
```

# Grid Continuación (2/2)

Existe la opción minmax () que nos permite definir un tamaño mínimo y máximo para las columnas y filas.

```CSS
.container{
    display: flex;
    grid-template-columns: minmax(100px, 1fr) minmax(200px, 2fr) minmax(100px, 1fr);
    grid-template-rows: 100px 100px 100px;
    grid-gap: 10px;
}

```

# Grid Template Areas

Podemos nombrar las celdas utilizando `grid-template-areas` y asignando un nombre a cada una:

```CSS

.container{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 100px);
    grid-gap: 10px;
    grid-template-areas:
    "header header header"
    "main main sidebar"
    "footer footer footer";
}

.item-1 {
    grid-area: header;
}

.item-2 {
    grid-area: main;
}

.item-3 {
    grid-area: sidebar;
}

.intem-4 {
    grid-area: footer;
}

```

Podemos utilizar `justify-items` y `àlign-items`para alinear los elementos dentro de las celdas. Sus opciones posibles son: `start`, `end`, `center`, `stretch` y `baseline`. Por defecto se aplica stretch:

```CSS
.container{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 100px);
    grid-gap: 10px;
    justify-items: start;
    align-items: end;
}
```
Podemos decirle a un item específico que se alinee de manera diferente utilizando `justify-self` y `align-self`. Sus opciones son: start, end, center, stretch y baseline.

```CSS

.item-1 {
    justify-self: center;
    align-self: stretch;
}

```

Podemos alinear nuestro grid en base a su contenedor utilizando `justify-content`y `align-content`.

```CSS
.container{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 100px);
    grid-gap: 10px;
    justify-content: center;
    align-content: center;
}
```

Podemos crear un grid responsive con el uso de `auto-fit`. Esto nos permite q  ue los elementos se ajusten al tamaño del contenedor.

```CSS

.container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr) );
    grid-template-rows: repeat(4, 1fr) ;
    grid-gap: 10px;
}

```