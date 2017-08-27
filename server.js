var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config ={
    user: 'ap96adi',
    database: 'ap96adi',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD 
};

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



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);
app.get('/test-db', function(req, res){
   // make a select request
   // return a response with the results
   pool.query('SELECT * FROM test', function(err, result){
       if(err){
           res.status(500).send(err.toString());
       } else{
           res.send(JSON.stringify(result));
       }
   });
});

var counter = 0;    
app.get('/counter', function(req, res){
   counter = counter + 1;
   res.send(counter.toString());
});

var names =[];
app.get('/submit-name', function (req, res){
//get the name from the request
var name = req.query.name;

names.push(name);
//JSON  : JavaScript Object Notatation
res.send(JSON.stringify(names)); 
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

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
