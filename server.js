var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
    title : "Aritcle One | Adi",    
    heading : "Aritcle One",    
    date : "Aug 5 2017",
    content : `
            <p>
                Hello! I'm Aditya Pandey and i'm a student at bharati Vidyapeeth's College Of Engineering.
            </p>
            <p>
                I'm 20 years old and live in Delhi.
            </p>`    
    },
    'article-two' : {
    title : "Aritcle Two | Adi",    
    heading : "Aritcle Two",    
    date : "Aug 21 2017",
    content : `
            <p>
                Hello! I'm Aditya Pandey and i'm a student at bharati Vidyapeeth's College Of Engineering.
            </p>
            <p>
                I'm 20 years old and live in Delhi.
            </p>`    
    },
    'article-three' : {
    title : "Aritcle Three | Adi",    
    heading : "Aritcle Three",    
    date : "Aug 25 2017",
    content : `
            <p>
                Hello! I'm Aditya Pandey and i'm a student at bharati Vidyapeeth's College Of Engineering.
            </p>
            <p>
                I'm 20 years old and live in Delhi.
            </p>`    
    }
};

var template = function(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `<!DOCTYPE html>
                        <html>
                          <head>
                            <title>
                            ${title}
                            </title>
                            <link href="/ui/style.css" rel="stylesheet" />
                          </head>
                          <body>
                            <div class="container">
                                <a href="/">
                                Home
                                </a>
                                <hr/>
                                <h1>
                                ${heading}
                                </h1>
                                <div>
                                ${date}
                                </div>
                                <div>
                                ${content}  
                                </div>
                            </div>
                           </body>
                        </html>
                        `;
                        return htmlTemplate;
};

counter = 0;    
app.get('/counter', function(req, res){
   counter = counter + 1;
   res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(template(articles[articleName]));
  });

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var names =[];
app.get('/submit-name/:name', function (req, res){
//get the name from the request
var name = req.params.name;

names.push(name);
//JSON  : JavaScript Object Notatation
res.send(JSON.stringyfy(names)); 
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
