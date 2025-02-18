# BEN (Block, Elements, Modifier)

# Suite CSS

- Block -> Componente
- Element -> Elemento
- Modifier -> Modificador

nuevos
- Utilities
- Estados (on/off)

## Utilities

- Se escribe con `u-utilityName` por ejemplo `u-red`
- Se escribe con u- camelCase
- Se utiliza para aplicar un estilo a cualquier elemento

```CSS
.u-red{
    background-color: red;
    color: white;
}

.u-big{
    font-size: 5rem;
}

/* Utilities responsive */

.u-sm-text{
    /* Texto pequeño (small) */
}

.u-md-text{
    /* Texto pequeño (medium) */
}

.u-lg-text{
    /* Texto pequeño (large) */
}

```

# Componente

Igual al bloque de BEN pero se escribe con PascalCase. Por ejemplo `Header`, `MiBoton`, `SeccionHero`, `Tweet`.

# Elementos (Part, DescendentName)

Igual que el elemento en BEN, pero se escribe con camelCase. Por ejemplo `Header-title`, `Card-imageFront`, `Tweet-bodyText`, `Tweet-bodyImage`.

```HTML
<article class="Tweet">
    <header class="Tweet-header">
        <img class="Tweet-headerImg" src="./img/mi-foto.png" alt="">
        ...
    </header>
    <div class="Tweet-bodyText">
        ...
    </div>
</article>
```

## Modificadores

Al igual que en BEN, y se utiliza con camelCase `Componente--nombreModificador`

```html

<button class="Button">Boton normal </button>
<button class="Button Button--navidad">Boton Navidad</button>
```

## Estados

Nuevos: Clases para elementos que marcan el estado de un componente/elemento. Se escribe con camelCase y usa la palabra `is-` delante.

```CSS

.Tweet{
    /* Estilos de un tweet común */
}
.Tweet.is-expanded {
    /* Solo cambios para el tweet abierto */
}

```

```HTML

<article class="Tweet is-expanded">
    ...
</article>

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

Podemos crear un grid responsive con el uso de `auto-fit`. Esto nos permite q   ue los elementos se ajusten al tamaño del contenedor.

```CSS

.container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr) );
    grid-template-rows: repeat(4, 1fr) ;
    grid-gap: 10px;
}

```