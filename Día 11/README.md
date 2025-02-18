Página oficial: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries

# QUÉ ES UNA MEDIA QUARY (MQ)
-Son declaraciones en CSS que nos permiten definir qué reglas aplicar a partir de unas reglas asignadas por nosotros.

# Sintaxis de MQ
Una MQ se compone de las siguientes partes:
- Un @media, la cual es una palabra reservada [Keyword]
- Un tipo de media (screen, print, all, speech) [MediaType]
- Operadores (and, not, only) [Operators]
- Breakpoints una condición (max-width, min-width, etc)
- Un bloque de CSS (Nuestras reglas CSS)


```CSS
/* keyword MediaType Operador/es    (breakpoint)     */
/* @media screen            and     (breakpoint) {}  */

@media not|only|"" screen and|or (min-width: 600px) {

body{
    background-color: lightblue;
}

h1 {
    color:red;
}

}

/* Combinar breakpoints (pantallas entre 600 y 800px) */
@media screen and (min-width: 600px) and (max-width: 800px){
    body{background-color: lightblue;}
}

/* Cuando la pantalla está horizontal */
@media screen and (orientation: landscape){
    body{background-color: lightblue;}
}

/* Regla spara hacer un modo oscuro*/
@media screen and (prefers-color-schema: dark) {
    body{
        background-color: darkgray;
        color: white;
    }
}

```

### Media Types (screen/prints)

- all: todos los dispositivos
- prints: material de vista previa de impresión
- screen: pantalla a color (tablets, móvil, computadora)
- speech: dispositivos de conversión de texto a voz

-otros: pueden aparecer types DEPRECIATED tv, handheld, speech, braille, etc...(no van mas apartir de CSS3)

Ejemplo de impresión:
```CSS
@media print {
    .no-te-imprimas{
        display: none !important;
    }
}

```

### Tips para utilizarlos
- Los mediatyps sobreescriben las reglas CSS normales, pero no poseen una mayor especificidad. Por lo tanto las medias queries deben estar por debajo de las reglas que quiera reemplazar.
- Deben tener el mismo selector para que reemplace la regla que deseamos. Como excepción podemos utilizar las reglas principales en vez de especificas (background para reemplazar background-color).
- Pensar bien los breakpoints.
- Podenmos utilizar un @media para cada selector, o una sola para todos los selectores (recomendado).
- Mobile First!!!!!

## Mobile First
- Intentamos desarrollar primero para el movil, y luego para pantallas mas grandes. De esta manera nos aseguramos de que se vea bien en dispositivos moviles.
- El estandar (no lleva mq) es el de móvil; el retso de pantallas es el que lleva media querist
-  web para actualizar tamaños de dispositivos: BROWSERSTACK

- Movile (55%): 320px - 480px
- Tablets (2%): 768px - 1024px
- Desktop (43%): 1024px - 1920px

```CSS

/*Movile first*/
        320px
    /*reglas para móvil*/



/*Tablet*/
@media only screen and (min-width: 768px) {
    /*reglas para tablet*/
}

/*Desktop*/
@media only screen and (min-width: 1024px) {
    /*reglas para desktop*/
}

```

## Utilizarlo en HTML

Podemos utilizar los media queris directamente en nuestro html con el atributo "media".
Antes que nada debemos asegurarnos que exista la etiqueta meta viewport en el head.

    `<meta name="viewport" content="width=device-width, initial-scale=1.0">``

Ejemplos NO RECOMENDADOS:
```html
<link rel="stylesheet" media="screen and (min-width: 600px)" href="./css/estilos-tablet.css">
<link rel="stylesheet" media="screen and (min-width: 1024px)" href="./css/estilos-tablet.css">



<style media="screen and (min-width:600px)">
    .body{
        background:red;
    }
</style>
```

# Ejemplo de Media Queries en Imagenes (usando pictures)

```html

<picture>
    <source media="(min-width:650px)" scret="./img/grande.jpg">
    <source media="(min-width:450px)" scret="./img/mediana.jpg">
    <img src="./img/foto-pequenia.jpg" alt="mi mascota">
</picture>

```

## Trucos para un buen responsive

- Utilizar medidas relativas (%, vw, vh, em, rem) [tratar de no utilizar px]
- No utilizar etiquetas de Height

## Comprobación de nuestro Responsive + Media Queries

- Utilizar el inspector de elementos de chrome // el icono al lado de 'elements' nos permite seleccionar el tamaño de visualización.
- Probarla en nuestro propio dispositivo.
- Usar el app http://responsively.app para probar pantallas simultaneas


## Links de Interés

[CSS MQ w3Schools](https://www.w3schools.com/css/css3_mediaqueries.asp)
[Responsive Design w3Schools](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)
[Responsive Design MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries)
[SCSS + MQ](https://www.freecodecamp.org/news/learn-css-media-queries-by-building-projects/)