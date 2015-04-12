var myKitties = [ { title: "1st", pic: "https://www.petfinder.com/wp-content/uploads/2012/09/Blog-Kitty-Cam-solo.jpg" }, { title: "2nd", pic: "http://www.animal-photography.com/thumbs/red_tabby_long_hair_kitten_~AP-0UJFTC-TH.jpg" }, 
{ title: "3rd", pic: "http://www.animal-photography.com/thumbs/silver_tabby_kittens~AP-0JO6Y9-TH.jpg" }, 
{ title: "4th", pic: "http://www.animal-photography.com/thumbs/silver_tabby_kitten_looking_up~AP-0DLVMB-TH.jpg" }
];

$( document ).ready( function(){ 
    for(var i=0; i<myKitties.length; ++i) {
        $("#" + i ).css("background-image", "url(" + myKitties[i].pic + ")" );
    };
});

$(".image").mouseenter( function() {
	console.log(this);
	$(this).html("<p class='info'><span class='proj-title'>Title:</span>" + myKitties[this.id].title + "</p>");
}).mouseleave( function() {
	$("p.info").html("");
});

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
	console.log("clicked");
	var comment = $("#message").val();
	console.log(comment);
	$("#visible-comment").html(comment);
});

$(function() {
	var rows = $(".my-row");
	console.log("row function");
	for(var i=0; i<rows.length; ++i) {
		if (i%2===0) {
			$(rows[i]).css("background-color", "grey");
		};
	};
});


var map;
function initialize() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(36.147247, -115.156031),
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  map.setTilt(45);
 };

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
      '&signed_in=true&callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;
