require('dotenv').config();

const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes/auth.routes');



const cors = require('cors');


const mainRoutes = require('./routes/main.routes');
const authRoutes = require('./routes/auth.routes');
const wineRoutes = require('./routes/wine.routes');



const app = express();
//Rutas
app.use(bodyparser.json())
app.get('/',function(req,res) {
    
});
app.use(cors());
app.use(express.json());


app.use('/auth', authRoutes);
app.use('/main', mainRoutes);
app.use('/wine', wineRoutes);
app.use(express.urlencoded({extendend: true}));
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  app.use((err, req, res, next) => {
    res.locals.error = err;
    const status = err.status || 500;
    res.status(status);
    
  });
  


app.set('port',3000)
app.set('view engine', 'jade')
app.listen(app.get('port'), ()=> console.log(`The server is running on port:3000`));