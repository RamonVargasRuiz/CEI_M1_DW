# Día 8

## Formulario
 - Los formularios utilizan etiquetas envolventes
    utilizamos etiqueta<imput> para ingresar datos. Algunos tipos ("type") de ellos eran: radio, checkbox, text, email, password, submit.
 - Todos los imputs REQUIEREN el atributo `name`para enviar información.    Este debe ser único excepto en radius
 - Utilizamos otras etiquetas para algunos tipos de datos, por ej: <textarea>, < select> + option.
 - Los imputs suelen estar acompañados de un <label> como descripción.

## Métodos de GET y POST para enviar información

- GET es visible en la URL, y POST utiliza el cuerpo de la petición.
- Normalmente GET se utiliza para obtener información y POST para enviarla.
- GET tiene un límite de 2048 caracteres y POST no (se utiliza para enviar información de mayor tamaño , incluyendo el upload de archivos).

    Ejemplos de formularios con GET:
    - Buscadores
    - Filtros
    - Paginación

    Ejemplos de formularios con POST:
    - Formularo de contacto
    - Formulario de login/registro
    - Formulario de pago


