const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session');

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser());
app.use(session({
    secret: 'SECRET'    
}))

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.listen(PORT)
console.log(`--- Listening on ` + PORT + ` ---`)