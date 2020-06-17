const express = require('express')
const hbs = require('hbs')
const path = require('path')
const app = express()
const coronaRoutes = require('./routes/corona')
const port = process.env.PORT ||3000

const publicDir = path.join(__dirname,'./public')
const viewsDir = path.join(__dirname,'./templates/views')
const partialsDir = path.join(__dirname,'./templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsDir)
hbs.registerPartials(partialsDir)



app.use(express.static(publicDir))
app.use(coronaRoutes)

app.listen(port,"0.0.0.0")