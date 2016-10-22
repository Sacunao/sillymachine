###SILLY MACHINE
![Imagen Antes](http://4.1m.yt/iiWHinD.png "Imagen")

###CASO CRI
En el caso del cri se nos pide hacer una página que al hacer un clic al boton este cambie de color en el borde de cada a una de los circulos de la página de forma iterativa. También solicita que el nombre del circulo este escrito en el input del form.

####SOLUCIÓN 

1. Hacer un script el que incluye eventos, uno de ellos es el click, que nos permitira ejecutar una accion en el botón CRI. la acción que se ejecutara será que aparezca un borde de color en cada uno de los círculos.

```javascript
  	var boton = document.getElementById("cri");

	window.addEventListener("load", cargarPagina);

	function cargarPagina(){
		boton.addEventListener("click", cambioColorCri);
	}
```

2. Para lograr el primer requerimientos solicitado teniamos que crear una secuencia iterativa que permita cambiar el estilo de bordes por cada clic, para eso utilizamos arrays y cotadores para facilitar el proceso y crear una función reutilizable:

```javascript
  	var elementos = ["bolaUno","bolaDos","bolaTres"];
	var clases = ["b-pink","b-gyellow","b-violet"];
	var colorNames = ["Greenyellow","Darkred","Grey"];
	var contador = 0;

	function cambioColorCri(){
		asignarColor(colorNames[contador]);
		cambiarColor(elementos[contador],clases[contador]);
		contador++;

		if (contador > elementos.length-1) {
			contador = 0;
		}
	}

	function asignarColor(color) {
		document.getElementById("color").value = color;
	}

	function cambiarColor(elementoId,borderClass) {
		limpiarBorders();
		document.getElementById(elementoId).classList.add(borderClass);	
	}

	function limpiarBorders() {
		for (var i = 0; i < elementos.length; i++ ) {
			document.getElementById(elementos[i]).classList.remove(clases[i]);
		}
	}
```
Imagen Final 

![Imagen Antes](http://4.1m.yt/x6RU-rU.jpg "Imagen")




