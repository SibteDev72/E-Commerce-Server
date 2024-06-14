const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => {
        console.log("E-Commerce-Project DATABASE IS CONNECTED SUCCESSFULLY");
    })
    .catch(() =>{
        console.log("E-Commerce-Project DATABASE IS NOT CONNECTED");
    })                                                                                                                     

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/E-Commerce')
//     .then(() => {
//         console.log("E-Commerce-Project DATABASE IS CONNECTED SUCCESSFULLY");
//     })
//     .catch(() =>{
//         console.log("E-Commerce-Project DATABASE IS NOT CONNECTED");
// })                                                                                                                              