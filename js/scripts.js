$("#message").on("keyup", function() {
	console.log("keyup happened"); 
	var charCount = $("#message").val().length;
	console.log(charCount);
	$("#char-count").html(charCount);
	if(charCount > 50) {
		$("#char-count").css("color", "red");	
	} else {
		$("#char-count").css("color", "black");
	}
}); 

$("button").on("click", function(){
	console.log( "clicked" );
	var comment = $("#message").val();
	console.log(comment);
	$("#visible-comment").html(comment);
});

