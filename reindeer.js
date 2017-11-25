//loop through all the reindeer in the array
//add name of the reindeer to <div> 
//prepend reindeer names with corresponding color from other array.

var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var colorReindeer = "";
var hohohoElement = document.getElementById("reindeer");

for (var i=0; i<reindeer.length; i++) {
    colorReindeer += "<li>" + colors[i] + " " + reindeer[i] + "</li>";
};

hohohoElement.innerHTML = colorReindeer;