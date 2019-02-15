
module.exports.connectMongoose = () => {
    var mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/LTMeter', { useNewUrlParser: true });
    return mongoose
}