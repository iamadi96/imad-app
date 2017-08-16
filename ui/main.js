console.log('Loaded!');
var element = document.getElementById("mainText");
element.innerHTML = "New Value";

//make the image move

var img = document.getElementById("yala");
img.onclick = function() {
  img.style.marginLeft = "100px";  
}; 