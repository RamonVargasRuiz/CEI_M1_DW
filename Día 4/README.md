# Día 4

## selectores CSS
```CSS
/* selector de id (La más específica)*/
#caja {   
    color: blue;
}

/* Selector de clase */
.caja {   
    color: red;
}

/* selector etiqueta*/
div {  
    color: green;
}


/* selector de múltiples items */
h1, h2, h3, #caja1, .caja, p{
color: red;
}

.h2{

}

/* Selector con atributos */
img[alt="foto1"] {
    color: brown;
}

a[href="http://x.com/miPerfil"]{ 
    color: red;
}
div [class*="test"] { /* el asterisco hace de comodín en la búsqueda */

color: salmon;

}

/* Selector de hijos directos */

header > nav > #logo > a { }

/* Selector de todos los descendientes */

header a {

}

/* Selector del siguiente elemento */
p + a {

}



```

```html


<header>
    <nav>
        <h1>
            <a href="/">Mi pagina </a>
        </h1>

        <ul>
            <li><a href="./">Home </a></li>
            <li><a href="./productos.html">Productos </a></li>
            <li><a href="./contacto.html">Contacto </a></li>
        </ul>
    </nav>
</header>

<h1 id="titulo principal">titulo</h1>
<h2 class="h2"></h2>
<div class="caja cajaimportante" id="caja1">soy un div</div>
<img src="./img/foto.png" alt= "foto 1" />
<a href="http://x.com/miPerfil">Mi perfil en x </a>
<div class="test">caja salmon</div>

/* Link para aplicar estilos al header mediante un archivo css externo */
<link rel="stylesheet" href="">
```


# Reset CSS

Buscamos que todos los navegadores (chrome, safari, brave, firefox) inicien nuestros proyectos con los mismos estilos, sin aplicar los propios.

Ejemplos de reset CSS:
[Meyer web]
[Eduardo fierro]
[Top 10]


```CSS
/*reset minimo*/
/* el '*' incluye a todos los elementos de mi web*/
/* el border bo utiliza el borde de la caja como ancho, en vez del contenido */
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```
# mini - actividad

1. crear una página con dos cajas que contengan párrafos y con la clase ".caja"
2. Agregar estilos a tu caja para visualizar bordes, margenes y padding.
3. a la segunda caja agregarle la clase ".alternativa"
4. A la clase alternativa agregarle el estilo box-sizing: border-box y comparar la diferencia.
5. Buscar en internet alguna hoja de reset e implementarla en el proyecto.

