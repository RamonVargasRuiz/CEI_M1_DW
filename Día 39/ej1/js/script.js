function ParallaxEffect(){

    const parallaxBg = document.querySelector('.parallax-bg');

    const elementoFlotante= document.querySelector('.parallax-elemento-flotante');

    window.addEventListener('scroll',()=>{
        let scrollPos = window.scrollY;
        console.log(scrollPos);


        // Mover el fondo
        // Velocidad 0.3 significa que se mueve al 30% de l avelocidad del scroll
        parallaxBg.style.transform = `translateY(${scrollPos * 0.3}px)`;

        if(elementoFlotante){
            // podemos aplicar multiples movimientos, ej rotacion
            let rotation = scrollPos * 0.05 // Una rotación pequeña

            // IMPORTANTE: 'transfomr:translatey()' es mejor para el rendimiento que cambiar 'top'
            elementoFlotante.style.transform=`translateY(${scrollPos * 0.6}px)rotate(${rotation}deg)`;
        }
    });

}

if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
// no aplicar efectos
console.log("No aplicar parallax por decisión de usuario")
}else{
    console.log("Se aplica el parallax")
    ParallaxEffect();
}

