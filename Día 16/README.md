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


