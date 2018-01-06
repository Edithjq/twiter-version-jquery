$(document).ready(function(){
	// alojando un elemento del dom seleccionando con jquery
	var $textarea = $("#tweet-area");
	var $caracteres = $("#count");
	var $maxCharacters = 140;
	var $enviar = $("#tweet-btn");
// funcion manejadora de eventos: asociada a eventos
	$textarea.on('keyup', function(event){

		$valor = $(this).val();

		// si el  input tiene texto el disabled se desactiva
		if($valor.length > 0)
			$enviar.attr("disabled", false);
			$caracteres.html($maxCharacters - ($(this).val()).length);
			
		// si el input esta vacio o es mayor a 140 el  disabled se activa
		if (($valor.length == 0) || ($valor.length > $maxCharacters))
			$enviar.attr("disabled", true);
		 

		if($valor.length > 120)
				 $(this).css("color", "red"); 
			
			
	});

	// 	if($valor.length > 0) {
	// 		$("#tweet-btn").attr("disabled", false);
	// 		console.log($caracteres.html($maxCharacters - ($(this).val()).length));

	// 		  if (($(this).val()).length >= 140) {
	// 			$("#tweet-btn").attr("disabled", true);
	// 		}
	// 			else (($(this).val()).length >= 120) {
	// 				 $(this).css("color", "red"); 
	// 			}
			

	// 	 else { 
	// 		$("#tweet-btn").attr("disabled", true); 
			
	// 	}

	// });

	

	$("#tweet-btn").on("click", function(event){
		event.preventDefault();
		var $texto = $textarea.val();
		$("#messages").prepend("<p>" + $texto + "</p>");
		limpiar();

	});

	// linpiar input cuando se envie su contenido
	function limpiar(){
		$textarea.val(" ");
	}
});