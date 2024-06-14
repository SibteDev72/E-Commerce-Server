const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sibtedev72:commerce@cluster0.8e3txpq.mongodb.net/E-Commerce-DB?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("E-Commerce-Project DATABASE IS CONNECTED SUCCESSFULLY");
    })
    .catch(() =>{
        console.log("E-Commerce-Project DATABASE IS NOT CONNECTED");
    })                                                                                                                                                                                                                                               