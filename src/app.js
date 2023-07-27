const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('./util/forecast')

const app = express()

//define RootDirectory paths
const rootDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(rootDirectory))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Home',
        name: 'Mark'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
                        title: 'Help ',
                        name: 'Mark'})
 })

 app.get('/about', (req, res) => {
    res.render('about', {
                title: 'About',
                name: 'Mark' })
 })

 app.get('/weather', (req, res) => {      
    forecast.getForecast(req.query.address, (error, response) => {
        if(error) {
         return res.send(error)
        }
        res.send({ 
                response
        })
    })
    
  
 })


app.get('/help/*', (req, res) => {
    res.render('404-page', {
        title: 'Help article is not available',  
    })
})

app.get('/about/*', (req, res) => {
    res.render('404-page', {
        title: 'About article is not available',
    })
})

app.get('*', (req, res) => {
    res.render('404-page',{
        title: 'Page is not found'
    })
})

app.listen(3000, () => {
      console.log('listening on port 3000')  
})
