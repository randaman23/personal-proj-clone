require('dotenv').config()

const massive = require('massive'),
    express = require('express'),
    session = require('express-session')
    axios = require('axios')
controller = require('./controller')
auth = require('./auth_controller')
    

const app = express()

const {
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET,
    REACT_APP_DOMAIN,
    REACT_APP_CLIENT_ID,
    CLIENT_SECRET
} = process.env

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

massive(CONNECTION_STRING).then(db => app.set('db', db))

app.get('/auth/callback', auth.login)
app.get('/api/user-data', auth.userData)

app.get('/api/products/:category', controller.getProducts)
app.get('/api/item/:id', controller.getItem)
app.post('/api/additem', controller.addItem)




app.listen(SERVER_PORT, () => {
    console.log(`Magic is happen' on port ${SERVER_PORT}`)
})