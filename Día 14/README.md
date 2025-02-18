# Unidades de medidas en CSS: px, %, em, rem

## Pixel (px)
Unidades absolutas que representan un punto en la pantalla. Son ideales para tamaños y dimensiones precisos que no deben cambiar en relación con otros elelemntos. Es recomendable usarlo para bordes, imágenes y otros elementos de dimensión fija.

## Porcentaje (%)
Es una unidad relativa al tamaño del elemento padre. Ej: Si el padre es de 200px y el elemento tiene un widht del 50%, el ancho del objeto será de 100px. Esta medidaes útil para diseños fluidos y responsive que se adapten al tamaño de pantalla. Es recomendable para contenedores que varíen según su contenedor

## EM (em)
La unidad "em" es relativa al tamaño de la fuente del elemento padre (o el suyo). Por ejemplo si el padre tiene un `font-size de 10px;` y un `margin: 3em;`el margen será de 30px. Esta unidad es util para crear tamaños de texto y margenes que escalen con el tamaño de la fuente. Esto mejora la accesibilidad y flexibilidad del diseño.
Por defecto los navegadores asignan el font-size inicial a 16px.

```CSS
.acrd{
    font-size:16px; /* 16px */
    padding:1.5em; /* 24px */
}

```

## REM (Root EM)
Es relativa al tamaño de la fuente de la RAÍZ del documento(normalmente la raíz del documento es <html>). Por ejemplo, si el tamaño de la fuente del HTML es de 8px, y un elemento descendente en varios niveles tiene una medida de "3rem" su medida será de: "24px;" . Rem es útil para mantener una escala consistente en todo el documento. Independientemente de la estructura del DOM. Es recomendable usar EM para tamaños globales, como el tamaño principal de la fuente y los márgenes para garantizar coherencia en todo el sitio.

```CSS
html {
    font-size: 16px;
}

.card{
    font-size: 1em;
}

.
```