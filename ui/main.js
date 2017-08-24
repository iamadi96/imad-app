//code for the button
var button = document.getByElementId('counter');
var counter = 0;

button.onclick = function(){
    //make a request to the counter endpoint
    
    //capture a response and store it in a variable
    
    //render the variable in the correct span
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    counter = counter + 1;
};