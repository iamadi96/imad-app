var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

/*var articles ={
    'article-one' :{
        title:"Article-one | Adi",
        heading:"Profile",
        content:`Hi i'm Adi and this is my profile.`
        },
    'article-two' :{
        title:"Article-two | Adi",
        heading:"Hobbies",
        content:`Playing cricket, developiong apps and following MotoGp.`
        },
    'article-three' :{
        title:"Article-three | Adi",
        heading:"Experience",
        content:`Worked at a startup called SCRAPLABS!`
        }    
};   
function createTemplate (data){    
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = 
    `<html>
    <head>
     <title>
     ${title}
     </title>   
     <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    
    <body>
        <div>
            <a href="/">Home</a>
            <hr/>
        </div>
            <h1 style="color:red">
            ${heading}
            </h1>
        <div>
            ${content}
        </div>
    </body>
    
    </html>
    `;
    return htmlTemplate;
};
*/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


/*
app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
}); */ 

app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'aritcle-one.html'));
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
