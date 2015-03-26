$("button").on("click", function(){
	console.log( "clicked" );
	var comment = $("textarea").val();
	console.log( "comment" );
	$("#visible-comment").html(comment);
}); 



