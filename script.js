//your JS code here. If required.
const button = document.getElementByTagName("input");
const myFun = function removeColor() {
	var x = document.getElementById("colorSelect");
	x.remove(x.selectedIndex);	
}
button.addEventListener('click',myFun);