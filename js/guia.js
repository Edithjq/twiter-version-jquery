$(document).ready(function(){
	// alojando un elemento del dom seleccionando con jquery
	var $textarea = $("#tweet-area");
	// con javascript
	// var area = document.querySelector("#tweet-area");
	// console.log($textarea);
	// console.log(area);

// funcion manejadora de eventos: asociada a eventos
	$textarea.on('keyup', function(event){
		// nodo
		// console.log(event.target);
		// objeto jquery (el this es el target)

		// captura la longitud de la cadena
		console.log(($(this).val()).length);
		// captura el valor
		console.log($(this).val());

		if(($(this).val()).length >= 1) {
			$(this).css("color", "red");
			$("#tweet-btn").removeAttr("disabled");
		}
	});

	$("#tweet-btn").on("click", function(event){
		event.preventDefault();
		var $texto = $textarea.val();
		$("#messages").prepend("<p>" + $texto + "</p>")
	