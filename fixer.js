var body = document.getElementsByTagName("BODY")[0]; 

function fixList() {
	var items = document.getElementById("items");
	var currentIndex = parseInt(document.getElementById("publisher-container").getElementsByTagName("span")[0].innerHTML.split(" / ")[0]);
	var maxElements = parseInt(document.getElementById("publisher-container").getElementsByTagName("span")[0].innerHTML.split(" / ")[1]);
		
	if(maxElements > 200 && currentIndex > 100) {
		items.scrollTo(0, items.scrollHeight / 2);
	}
}

body.addEventListener("yt-navigate-finish", function(event) {
	setTimeout(function(){
		fixList();
	}, 500);
});

window.onfocus = function() {
    setTimeout(function(){
		fixList();
	}, 500);
};

