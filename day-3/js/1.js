$(document).ready(function(){
	/*$("#clicker").on("click", function(){
		$("#secret").fadeIn();
	});*/
	/*$("#clicker").on("click", function(){
		$("#secret").slideDown();
	});*/
	$("#clicker").text("Click me to toggle a hidden secret!");
	$("#clicker").on("click", function(){
		$("#secret").fadeToggle();
	});
});
