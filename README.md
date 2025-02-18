# Transiciones (transition)


Las transiciones en CSS permiten animar los cambios de propiedades CSS durante un período de tiempo en lugar de que ocurran instantáneamente. Se usan para hacer que las interacciones con la interfaz sean más suaves y atractivas.

Sintaxis básica
```css
selector {
  transition: propiedad duración función_de_tiempo retardo;
}
```
- Propiedad: La propiedad CSS que se animará (por ejemplo, opacity, background-color, transform).
- Duración: Tiempo que dura la transición (por ejemplo, 0.5s, 1s).
- Función_de_tiempo (opcional): Controla la velocidad de la transición (por defecto es ease).
- Retardo (opcional): Tiempo antes de que inicie la transición.

Ejemplo básico:

```css
button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  transition: background-color 0.5s ease-in-out;
}

button:hover {
  background-color: red;
}
```

📌 Explicación: Cuando pasas el mouse sobre el botón (:hover), el color de fondo cambia de azul a rojo con una transición suave de 0.5s.

Propiedades que admiten transiciones
No todas las propiedades de CSS pueden ser animadas. Algunas comunes son:

background-color
color
opacity
width, height
transform (como scale, rotate, translate)
margin, padding
Ejemplo con múltiples propiedades

```css
.box {
  width: 100px;
  height: 100px;
  background: orange;
  transition: width 0.5s ease, height 0.5s ease, background 1s linear;
}

.box:hover {
  width: 200px;
  height: 200px;
  background: purple;
}
```
📌 Explicación: La caja crecerá y cambiará de color con diferentes duraciones y efectos.

Usando all para todas las propiedades
```css
.box {
  transition: all 0.5s ease;
}
````
⚠️ Cuidado: Puede afectar el rendimiento si hay muchas propiedades cambiando.

Ejemplo con transform

```css
.box {
  width: 100px;
  height: 100px;
  background: coral;
  transition: transform 0.5s ease-in-out;
}

.box:hover {
  transform: rotate(45deg) scale(1.2);
}
```
📌 Explicación: Al pasar el mouse, la caja gira 45 grados y se agranda un 20%.

Diferentes valores para transition-timing-function
Controlan la aceleración o desaceleración de la transición:

ease (por defecto) → Inicio lento, rápido en el medio, final lento.
linear → Misma velocidad todo el tiempo.
ease-in → Comienza lento, termina rápido.
ease-out → Comienza rápido, termina lento.
ease-in-out → Comienza y termina lento.
cubic-bezier(x, y, z, w) → Personalizado.
Ejemplo:

```css
.box {
  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
```

## Conclusión
Las transiciones en CSS son una forma fácil y elegante de mejorar la experiencia del usuario. Para efectos más avanzados, se pueden combinar con animaciones (@keyframes) y animation.