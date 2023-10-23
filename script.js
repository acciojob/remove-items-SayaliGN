//your JS code here. If required.
const button = document.querySelector("button");
const myFun = function removeColor() {
	var x = document.getElementById("colorSelect");
	x.remove(x.selectedIndex);	
}
button.addEventListener('click',myFun);