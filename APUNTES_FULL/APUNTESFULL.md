# DÍA 2 // ARCHIVO MARKDOWN
**Aprenderemos el uso de etiquetas para los archivos Markdown, destinados a tomar apuntes y anotaciones durante las clases**

Para tomar notas utilizaremos archivo Markdonw `README.md`

## Markdown (achico.md)
Lenguaje de marcado ligero que se utiliza para dar formato a un texto plano.

## Headways (h1,h2,h3,h4,h5,h6)
Título de pantalla

- Suele mantenerse un único h1 por página

Headings
# Título 1 (Igual H1)
## Título 2 (Igual H2)
### Título 3 (Igual H3)
#### Título 4 (Igual H4)
##### Título 5 (Igual H5)
###### Título 6 (Igual H6)

# Emphasis (Italic, bold, underline)

*texto italic*  
**texto negrita**  
_texto_

## Listas (order-list, unorder-list, subitems)

- Itenm 1
- Itenm 2
- Itenm 3

1. Item
2. Item
3. Item
    - Sub Item
    - Sub item

## Links

[Hazme click para ir a google](https://www.google.com/webhp?hl=es&sa=X&ved=0ahUKEwiB_InYvoeLAxXPSfEDHeYSLHgQPAgI)  
Haz [Click](https://www.google.com/webhp?hl=es&sa=X&ved=0ahUKEwiB_InYvoeLAxXPSfEDHeYSLHgQPAgI) para ir a google

Imágenes:

![foto](https://content.nationalgeographic.com.es/medio/2022/12/12/serpiente-1_e35da5df_221212161848_1280x720.jpg)

## Código en marckdown

Maquetación HTML

```html

<h1> Título principal </h1>
<h2> Título secundario </h2>

```
Estilos CSS

```css

h1 { 
    background-color: red;
}

```
Programación Java

```js
alert("Hola a todos")

```

# DÍA 4 // SELECTORES Y RESETS EN CSS
**Aprenderemos todos los secetores existentes en CSS y cómo funcionan, y Reset para nuestro archivo html**

## Selectores en CSS
- Un selector en CSS es un patrón que se usa para seleccionar y aplicar estilos a elementos HTML específicos en una página web.

- Los selectores permiten definir qué elementos recibirán ciertos estilos, ya sea por su tipo de etiqueta (como <p> o <div>), su clase (.clase), su ID (#id), sus atributos ([atributo="valor"]), su relación con otros elementos o combinaciones de estos.

### ID (identifie)
- Selecciona un elemento con el ID "caja". Se usa el símbolo `#` seguido del nombre del `ID`. Es el más específico de todos y debe de ser único dentro de la misma página.

-----------------------------
```html
<div id=caja>  

</div>


```

```CSS

#caja{
    color: blue;
}

```
-----------------------------

### CLASS ()