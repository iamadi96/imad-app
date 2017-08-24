//code for the button
var button = document.getByElementId('counter');
button.onclick = function(){
    var counter = 0;
    //make a request to the counter endpoint
    
    //capture a response and store it in a variable
    
    //render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};