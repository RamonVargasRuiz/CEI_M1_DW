# Transition

Es una fomra de cambiar los valores de una o mas propiedades de manera suave y gradual. Se puede aplicar transiciones a cualquier propiedad que acepte valores numéricos o de color.
Ej: widht, height, padding, color, background-color, opacity, etc.

Propiedades numéricas:
- font-size
- Margin
- Border-width
- Transform (scale, rotate, translate, ...)

Propiedades de color:
- Background-color
- Color
- border-color
- Box-shadow

## Cómo se defien

Utilizamos la propiedad `transition`y se puede personalizar de la siguiente manera:

- `transition-property` : nos indica la propiedad a animar.
- `transition-duration`: duración de la animación en segundos.
- `transition-timing-function` : La manera o forma en la que s eva a llevar a cabo la animación.
- `transition-delay`: demora antes de iniciar la transición.


```css

div{
    transition-property: font-size;
    transition-duration: 4s;
    transition-timing-function: ease-in-out;
    transition-delay: 2s;

    /* podemos unificar estas cuatro reglas en una sola */
    /* ORDEN DE ESCRITURA: prop / duation / timing-function / delay */
    transition: font-size 4s ease-in-out 2s;

}

```

### Transiciones de tiempo (transition-timing-function)
- `ease` : velocidad lenta -rápida -lenta (por defecto si no aplicamos un transition-timing-function diferente).
- `linear` : velocidad constante.
- `ease-in` : lento - rapida.
- `ease-out`: rapida - lento.
- `ease-in-out` : lenta -rápida - lenta (más brusca)
- `cubic-bezier()` : timing personalizado. `web: cubic-bezier`.
