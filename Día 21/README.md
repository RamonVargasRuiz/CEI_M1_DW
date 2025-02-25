# VARIABLES EN CSS

Se pueden crear variables de CSS para reutilizar valores en diferentes partes del código.

- Ventajas:
 -mejora la legibilidad del código
 - Facilita la actualización de valores

 Se suelen crear de manera global en la raíz del documento, con raíz me refiero a :root.
 En web el root es la etiqueta </html>, en svg es la etiqueta </svg>, además tiene mayor especificidad ":root" que "html".

 [Ejemplo Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/theming/#available-variables)

 ```css
:root{
    --bg-primary: #fff;
    --bg-secondary: #f0f0f0;
    --txt-primary: #000;
    --txt-secondary: #222;

    --mi-color-principal: #fff;
    --mi-color-secundario: #000;
}

.container {
    background-color: var(--mi-color-principal);
    color: var(--mi-color-secundario);
}

 ```

