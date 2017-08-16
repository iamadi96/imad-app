//counter code
var button = document.getElemnetById('counter');

button.onclick = function () {
  
  //create a request object
  var request = new XMLHttpRequest();
  
  //capture the response and storeit in a variable
  request.onreadystatechange = function(){
      if (request.status === 200){
          var counter = request.responseText;
          var span = document.gotElementById('count');
          span.innerHTML = counter.toString();
      }
  }
    //not done yet
};

//make the request
    request.open('GET', 'http://ap96adi.imad.hasura-app.io/counter', true);
    request.send(null);
};