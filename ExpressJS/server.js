const express = require('express')
const app = express()

// To render html pages To EJS extension
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('server started')
    res.send('hi')
})


app.get('/about', (req, res) => {
    res.send('This is about page')
})

app.get('/home', (req, res) => {
    res.send('This is home page')
})

app.get('/index', (req, res) => {
    res.render('index', {title: 'Hello', message: 'Hello, World!' });
})

app.listen(3000, () => {
    console.log('Server is up and Running at http://localhost:3000')
})