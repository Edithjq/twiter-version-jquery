$(document).ready(function(){
	// alojando un elemento del dom seleccionando con jquery
	var $textarea = $("#tweet-area");
	var $caracteres = $("#count");
	var $maxCharacters = 140;
// funcion manejadora de eventos: asociada a eventos
	$textarea.on('keyup', function(event){

		$valor = ($(this).val());
		// captura la longitud de la cadena
		// console.log(($(this).val()).length);
		// captura el valor
		// console.log($(this).val());

		// desactica disabled cuando hay texto /activa disabled cuando no hay texto
		if($valor.length > 0){
			$("#tweet-btn").attr("disabled", false);
				console.log($caracteres.html($maxCharacters - ($(this).val()).length));
		
		} else {
			$("#tweet-btn").attr("disabled", true); 
		}


		if($valor.length > 140){
			$("#tweet-btn").attr("disabled", true);
		} 
		
		if($valor.length == 120) {
				 $(this).css("color", "red"); 
			}
		
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
		// $texto.val(" ");

	});

});