const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000; //process.env.PORT will run else 3000

//public static path
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.use(express.static(staticPath));
app.set('view engine', 'hbs');
app.set('views',templatePath);
hbs.registerPartials(partialsPath);

app.get("", (req,res) =>
{
    res.render('index');
});
app.get("/about", (req,res) =>
{
    res.render('about');
});
app.get("/weather", (req,res) =>
{
    res.render("Weather");
});
app.get("*", (req,res) =>
{
    res.render('404error', {
        errorMsg: 'Opps! Page not found'
    });
});

app.listen(port, () => {
    console.log(`Port: ${port} ACTIVATED!`);
});