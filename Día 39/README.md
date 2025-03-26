# PARALLAX

awwwards.com // Web de referencias web

Uso de parallax con css:

```css

.parallax {
    background-image: url('imagen.jpg');
    height: 500px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

```

```js

windows.addEventListener('scroll', () => {
// Mostrar cuánto he scrolleado
console.log('Scroll Y:', window.scrollY)


});

```


## Prefers-reduce-motion media query

Los usuarios pueden activar en sus dispositivos la preferencia de reduce motion.

- Win: config->accesibilidad-> mostrar animaciones en windows
- Mac: pref sistema -> accesibilidad -> mostrar -> reducir movimientos
- iOS: config -> accesibilidad -> mostrar -> reducir movimientos


Para CSS usamos media queries

```css

@media (prefers-reduced-motion: reduce){
    .parallax {
        background-attachment: scroll;
    }

}

```

Para JS usamos windows.matchMedia


```js

if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    // no apliar efecto
    console.log("No aplicar parallax por decisión del usuario")
} else {
    // aplicar efecto parallax
    ParallaxEffect();
}

```