# Día 9

## APUNTES
 <fieldset> etiqueta para agrupar varios imputs de un formulario 
    <legend> etiqueta que corta la linea de los fieldset por la mitad
Esto es solo para cuando tenemos un formulario que hace upload/carga de archivos.
<form method="POST" ENCTYPE="multipart/from-data">
    <input type="file">
</form>

- nuevas etiquetas/tipos: tel, url, search, time, week, month, datetime-local /// investigar en CANIUSE 


## ACTIVIDADES

- Hacer un `login-form.html` sin estilos enviando información al atributo action="#" y metodo GET.
- Utilicen "labels" y que el usuário y clave sean obligatorios

- Investigar los siguientes types, explica qué hacen, y crea un ejemplo en `otros-imputs.html`: https://www.w3schools.com/html/html_form_input_types.asp
    - Number
    - Color
    - Date
    - File
    - Reset
    - Hidden
    - Range

# INTRODUCCIÓN A NOMENCLATURAS CSS Y BEM

Formas de nombra nuestras clases CSS para mantener códigos limpios y ordenados. Buscamos códigos comprensibles, predecibles y fáciles de mantener.

## Nombres de variables/selectores/archivos

- UPPERCASE
- lowercase
- Title Case
- camelCase: `miClaseDeHtml`
- PascalCase: `MiClaseDeHtml`
- kebab-case: `mi-clase-de-html` (se utiliza para nombrar archivos)
- snake_case: `mi_clase_de_html`

## Nomenclatura BEM (Block-elemen-Modifier)
La nomenclatura BEM (Block, Element, Modifier) en CSS es una metodología para escribir código más estructurado, mantenible y escalable. Se basa en la idea de dividir la interfaz de usuario en bloques, elementos y modificadores con una convención de nombres específica.

- Bloque: Representa un componente independiente y autónomo que, por sí solo, tiene sentido: card, header, container, button, footer, menu, checkbox.
- Elemento: Es una parte (o partes) del bloque que no tiene sentido por sí solo: "menu item", "list item", "checkbox label", "header tittle". /// Se separa con [__] (doble guion bajo). 
- Modificador: Una variación o estado diferente para un bloque o elemento. Cambia el estilo o comportamiento del bloque o elemento: "xmas", disabled,highlighted, checked, "size big", "color red".///Se separa con [--] 

Para mantener los estilos de bloque ao elemento para un modificador debes de colocar la clase propia mas la clase específica:
``
        <ul class="footer__items">
            <li class="footer__item">...</li>
            <li class="footer__item footer__item--special">...</li>
        </ul>
``
Ejemplo:
[bloque]__[elemento]--[modificador]

El nombre de clase

-[BEM](https://getbem.com/namig)

1. Comunicar un propósito o función.
2. Comunicar la estructura del componente.
3. Marca una especificidad baja consistente

[Link]!(https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdkerupv5p9lu9k10w5l1.png)

<style>
    .card {

    }
    .card__header{}
    .card__content{}
    .card__footer{}
</style>

<div class="card">
    <div class="card__header">Cabecera</div>
    <div class="card__content">Contenido</div>
    <div class="card__footer">Pié</div>
</div>

<div class="sidebar">
    <h1 class="sidebar__tittle">
    Titulo
    </h1>
    <ul class="">
        <li class="">
            <a class="" href="#">home</a>
        </li>
        <li class=""> 
            <a class="" href="#">home</a>
        </li>
        <li class="">
            <a class="" href="#">home</a>
        </li>
    </ul>
</div>