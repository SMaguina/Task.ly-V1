$("#message").ready(function(){
	$("#message").css("background-color", "pink");
}); 

$("button").on("click", function(){
	console.log( "clicked" );
	var comment = $("#message").val();
	console.log(comment);
	$("#visible-comment").html(comment);
});

