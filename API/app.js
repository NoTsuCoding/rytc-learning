const express = require("express")
const app = express()

const path = require('path')

// ! Utils
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const cookieParser = require('cookie-parser')
app.use(cookieParser())

// ! Secure

const cors = require('cors')
let allowOrigins = [
    'http://localhost:3000',
    'http://localhost:5000',
]
app.use(cors({
    origin: function(origin, callback) {
        if(!origin) return callback(null, true);

        if (allowOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }

        return callback(null, true);
    },
    exposedHeaders: [
        'Authorization'
    ]
}))

// Helmet
const helmet = require('helmet')
app.use(helmet())
app.use(helmet.frameguard({action: "deny"}))
app.use(helmet.xssFilter())
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"]
    }
}))
app.use(helmet.permittedCrossDomainPolicies({
    permittedPolicies: "by-content-type"
}))

//  ! Routes Handler
const favicon = require('serve-favicon')

const indexRoute = require("./routes/index")
const authenticationRoute = require('./routes/authentication')
const userRoute = require('./routes/user')
const studentRoute = require('./routes/student')

try {
    app.use(favicon(path.join(__dirname, "public", "icon", 'favicon.ico')))

    app.use('/', indexRoute)
    app.use('/authentication', authenticationRoute)
    app.use('/student', studentRoute)
    app.use('/user', userRoute)
} catch (err) {
    console.log("test")
}

module.exports = app