const mongoose = require('mongoose')
const assert = require('assert');
require('dotenv').config()

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useCreateIndex:true,
            useFindAndModify:false,
            useUnifiedTopology:true
        })
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}

module.exports = connectDB

