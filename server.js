const express = require('express')
const server = express()
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 
const expressFormData = require('express-form-data');
const cors = require('cors');
require('dotenv').config();
mongoose.set('strictQuery', true);
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const providersRoutes = require('./routes/providers-routes');
const activitiesRoutes = require('./routes/activities-routes');

server.use( bodyParser.urlencoded( {extended: false} ) );
server.use( bodyParser.json() );
server.use(cors());
server.use(expressFormData.parse());
//  const dbURL =process.env.DB_URL
//  console.log(dbURL);
   const dbURL = 'mongodb+srv://admin01:psx12345@cluster0.oikl7.mongodb.net/?retryWrites=true&w=majority';

const dbConfig = {
    'useNewUrlParser': true,
    'useUnifiedTopology': true
};

mongoose
.connect(dbURL, dbConfig)
.then(
    function() {
        console.log('Successfully connect to MongoDB.')
    }
)
.catch(
    function(dbError) {
        console.log('DB connection error', dbError)
    }
);

server.get('/',
    function(req, res) {
        res.send("Hello!")
    }
)


server.use('/providers', providersRoutes);
server.use('/activities', activitiesRoutes);
server.listen( port=3007, function(){
    console.log(`server is running on port ${port}`);
})
