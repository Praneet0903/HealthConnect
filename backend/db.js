const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/web99";
const mongoURI2 = "mongodb+srv://' + process.env.MONGODB_USERNAME + ':' + process.env.MONGODB_PASSWORD + '@devordie.bluopjz.mongodb.net/?retryWrites=true&w=majority&appName=DevOrDie";


const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
    .then(() => {
        console.log('mongoDB connected');
    })
    .catch((err) => {
        console.log('error: ' + err);
    });
}

module.exports = connectToMongo;