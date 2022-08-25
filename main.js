const express=require("express");
const session=require("express-session");
const app= express();

const initiatemongoose = require('./database/initmongo');
const initiateRoutes = require('./entities/routes');

app.set('view engine',"ejs");

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }))

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  


app.use( express.static("./public") );
app.use( express.static("./uploads") );
  

initiateRoutes(app);

initiatemongoose()
.then(function()
{
    console.log("Data Base connected successfully");

    app.listen(3000, function()
	{
		console.log("Server is live");
        
	});
})
.catch(function(err)
{
    console.log("Database Connection "+ err);
})
