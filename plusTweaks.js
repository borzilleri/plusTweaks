var links = document.getElementById("contentPane").getElementsByTagName("a");

var hideLinks = [
	"communities",
	"events"
];

for( var i = 0; item = links[i]; i++) {
	for( var j in hideLinks ) {
		if( item.href.match(hideLinks[j]+"$") == hideLinks[j] ) {
			item.parentElement.parentElement.parentElement.style.display = "none";
		}
	}
}

contentClass = "HTAwOd RbrTP wKIVhe";
var divs = document.getElementById("contentPane").getElementsByTagName("div");

for( var i = 0; item = divs[i]; i++ ) {
	if( item.className == contentClass ) {
		item.removeAttribute("style");
	}
}
