$(document).ready(function(){
	// alojando un elemento del dom seleccionando con jquery
	var $textarea = $("#tweet-area");
	var $caracteres = $("#count");
	var $maxCharacters = 140;
	var $enviar = $("#tweet-btn");


// funcion manejadora de eventos: asociada a eventos
	$textarea.on('keyup', function(event){
		$(this).css("color", "red"); 
		$valor = $(this).val();

		// si el  input tiene texto el disabled se desactiva
		if($valor.length > 0)
			$enviar.attr("disabled", false);
			$caracteres.html($maxCharacters - ($(this).val()).length);
			
			if($caracteres > 120)
		 	$valor.css("color", "green"); 
		 	if($valor > 130)
			$caracteres.css("color", "red"); 

		// si el input esta vacio o es mayor a 140 el  disabled se activa
		if (($valor.length === 0) || ($valor.length > $maxCharacters))
			$enviar.attr("disabled", true);
	});

	
	// enviar contenido  a un div
	$("#tweet-btn").on("click", function(event){
		event.preventDefault();
		var $texto = $textarea.val();
		$("#messages").addClass("estado");
		$("#messages").prepend("<p>" + $texto + "</p>");

		limpiar();

	});

	// linpiar input cuando se envie su contenido
	function limpiar(){
		$textarea.val("");
	}


});