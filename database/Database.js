const mongoose = require('mongoose');
// require('dotenv').config()

mongoose.connect('mongodb+srv://sibtedev72:commerce@cluster0.8e3txpq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("E-Commerce DATABASE IS CONNECTED SUCCESSFULLY");
    })
    .catch(() =>{
        console.log("DATABASE CONNECTION ERROR");
    })                                                                                                                   
    
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/E-Commerce')
//     .then(() => {
//         console.log("E-Commerce-Project DATABASE IS CONNECTED SUCCESSFULLY");
//     })
//     .catch(() =>{
//         console.log("E-Commerce-Project DATABASE IS NOT CONNECTED");
// })                                                                                                                              