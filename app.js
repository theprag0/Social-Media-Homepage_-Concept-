const express = require('express'),
    app = express(),
    path = require('path'),
    engine = require('ejs-mate');

app.engine('ejs', engine);
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});

app.get('/',function(req,res,next){
    res.render('home', { page: 'home' });
  });

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("The server has started.");
});