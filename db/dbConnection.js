const mongoose = require('mongoose');
const connectDB = async() => {
    try{
        await mongoose.connect('mongodb+srv://nihar:abcd12345@cluster0.4jfpspv.mongodb.net/temp?retryWrites=true&w=majority');
        console.log('Connected to MongoDB');
    }
    catch(error){
        console.log(error);
    }
}

module.exports = connectDB;