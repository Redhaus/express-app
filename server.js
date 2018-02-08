// import express
const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

// create app reference to express
var app = express();

// setup partial includes folder by registering it
hbs.registerPartials(__dirname + '/views/partials/')

//Set up template with handlebars
app.set('view engine', 'hbs')

// register helper function used in footer to get year
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

// register helper function to turn text into uppercase
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase()
})

// setup static folder
app.use(express.static(__dirname + '/public'))

// add middleware with app.use();
// app wont proceed until next is called
app.use((req, res, next) => {
    var now = new Date().toString()
    console.log(`${now}: ${req.method} ${req.url}`)
    next();
})

// app.use( (req, res, next) => {

//     res.render('maintenance.hbs', {
//         pageTitle: "Maintenance Page",
//         welcomeMessage: "Site is being worked on",

//     })

// })

// setup http handler for setting up routes
// get accepts path, then function that gives access to request and response
app.get('/', (req, res) => {

    res.render('home.hbs', {
        pageTitle: "Home Page",
        welcomeMessage: "Welcome to the site",

    })
})

app.get('/about', (req, res) => {
    res.render("about.hbs",{
        pageTitle: "About Page Header",
    })
})

app.get('/projects', (req, res) => {
    res.render("projects.hbs", {
        pageTitle: 'Projects Page',
        welcomeMessage: 'These are my projects'
    })
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: "Nothing here to see"
    })
})

// create route /bad
// send back json with error message 



// set up port for server with listen
// with callback
// need to change out var 
app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})


// create maintence in views
// the site is currently being updated 

// render in new middleware 
