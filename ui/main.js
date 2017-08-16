console.log('Loaded!');
var element = document.getElementById("mainText");
element.innerHTML = "New Value";

//make the image move

var img = document.getElementById("yala");

var marginLeft = 0;
function moveRight(){
    marginLeft= marginLeft + 10;
    img.style.marginLeft= marginLeft + "px";
}

img.onclick = function() {
  var interval = setInterval(moveRight, 1);  
}; 