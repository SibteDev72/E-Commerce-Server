const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => {
        console.log("E-Commerce DATABASE IS CONNECTED SUCCESSFULLY");
    })
    .catch(() =>{
        console.log("E-Commerce DATABASE IS NOT CONNECTED");
    })                                                                                                                                                                                                                                                