# FLEXBOX
Flexbox (Flexible Box) es un modelo de diseño en CSS que permite organizar y distribuir los elementos de una página de manera eficiente, incluso cuando su tamaño es desconocido o dinámico. Su objetivo principal es mejorar la alineación, el espaciado y la distribución de los elementos dentro de un contenedor, sin la necesidad de usar flotaciones (float) o posicionamientos complicados.

🚀 Principales conceptos de Flexbox
Flexbox trabaja con dos elementos principales:

Contenedor flex (flex container): el elemento padre que contiene los elementos flexibles.
Elementos flex (flex items): los elementos hijos que se distribuyen dentro del contenedor.
🔹 Propiedades del contenedor (display: flex;)
display: flex; → Activa Flexbox en un contenedor.
flex-direction → Define la dirección de los elementos:
row (por defecto, de izquierda a derecha).
row-reverse (de derecha a izquierda).
column (de arriba a abajo).
column-reverse (de abajo a arriba).
justify-content → Controla la alineación horizontal:
flex-start (inicio).
flex-end (final).
center (centro).
space-between (espaciado máximo entre elementos).
space-around (espaciado alrededor de cada elemento).
align-items → Alinea los elementos verticalmente:
stretch (por defecto, los estira).
flex-start (arriba).
flex-end (abajo).
center (centro).
baseline (alineado a la línea base del texto).
flex-wrap → Controla si los elementos se ajustan en varias líneas:
nowrap (por defecto, en una sola línea).
wrap (se ajustan en varias líneas si es necesario).
🔹 Propiedades de los elementos flex (flex items)
flex-grow → Permite que los elementos crezcan proporcionalmente si hay espacio disponible.
flex-shrink → Controla cómo los elementos reducen su tamaño cuando hay menos espacio.
flex-basis → Define el tamaño inicial del elemento antes de aplicar grow o shrink.
align-self → Permite alinear individualmente un elemento dentro del contenedor.