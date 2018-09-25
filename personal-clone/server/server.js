require('dotenv').config()

const massive = require('massive'),
    express = require('express'),
    session = require('express-session')
    axios = require('axios'),
    bodyParser = require('body-parser')
controller = require('./controller')
auth = require('./auth_controller')
    

const app = express()

app.use(bodyParser.json())

const {
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET,
    ENVIRONMENT
} = process.env

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use((req, res, next) => {
    if(ENVIRONMENT === 'dev') {
       req.app.get('db').set_data().then(userData => {
           req.session.user = userData[0]
           next();
       })
    } else {
        next();
    }
})

massive(CONNECTION_STRING).then(db => app.set('db', db))

app.get('/auth/callback', auth.login)
app.get('/api/user-data', auth.userData)

app.get('/api/products/:category', controller.getProducts)
app.get('/api/item/:id', controller.getItem)
app.post('/api/additem', controller.addItem)
app.get('/api/cartcount', controller.cartCount)




app.listen(SERVER_PORT, () => {
    console.log(`Magic is happen' on port ${SERVER_PORT}`)
})