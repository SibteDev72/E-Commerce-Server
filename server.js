const express = require('express');
const app = express();
// const fs = require('fs');
const jsonWebToken = require('jsonwebtoken');
require('./database/Database');
require('dotenv').config();

const cors = require('cors');
app.use(cors()); 

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var UserRouter = require('./routes/UserRoutes');
app.use('/User', UserRouter);

app.set('secretKey', process.env.SECRET_KEY);

function validateUser(req, res, next){
    jsonWebToken.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(error){
        if(error){
            res.json({'status': "Authorization Failed", message: error.message});
        }else{
            next();
        }
    })
}

var ProductRouter = require('./routes/ProductRoutes');
app.use('/ProductInfo', validateUser, ProductRouter);

var CategoryRouter = require('./routes/CategoryRoute');
app.use('/CategoryInfo', CategoryRouter)

var CustomerRouter = require('./routes/CustomerRoute');
app.use('/CustomerInfo', validateUser, CustomerRouter);

var MessageRouter = require('./routes/MessageRoute'); 
app.use('/MessageInfo', validateUser, MessageRouter);

// var MediaUpload = require('./routes/MediaUploadRoute');
// app.use('/UploadMedia', MediaUpload)

// var MultliFiles = require('./routes/MultiFileUpload');
// app.use('/UploadMultiMedia', MultliFiles);

// app.use(express.static('uploads'));
// app.get('/getImages', (req, res) => {
//     // get the filenames of the uploaded images
//     const filenames = fs.readdirSync('./uploads');
//     // create an array of objects with the URLs of the uploaded images
//     const ImagesNames = filenames.map((filenames) => ({
//        names: filenames
//     }));
//     res.json(ImagesNames);
// });

app.listen(process.env.PORT, () => {
    console.log(`E-Commerce SERVER IS RUNNING AT ${process.env.PORT} PORT`);
})