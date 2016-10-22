;(function(){
	var elementos = ["bolaUno","bolaDos","bolaTres"];
	var clases = ["b-pink","b-gyellow","b-violet"];
	var colorNames = ["Greenyellow","Darkred","Grey"];
	var contador = 0;
	var boton = document.getElementById("cri");

	window.addEventListener("load", cargarPagina);

	function cargarPagina(){
		boton.addEventListener("click", cambioColorCri);
	}
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
})();
