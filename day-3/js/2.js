$(document).ready(function(){
	function say(text) {
	  var msg = new SpeechSynthesisUtterance(text);
	  window.speechSynthesis.speak(msg);
	}
	$("#greet").on("click", function() {
		var msg = "Hi "+$("#name").val()+"!";
		say(msg);
	});
});
