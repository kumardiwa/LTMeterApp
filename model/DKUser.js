


const server = require('./server.js');
var mongoose = server.connectMongoose();

// var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/LTMeter', { useNewUrlParser: true });

var User = mongoose.model('DKUser',{
    name : {
        type : String,
        required : true,
        minlength : 1,
        trim : true
    },
    phone : {
        type : String,
        required : true,
        minlength : 1,
        maxlength : 12
    },
    email : {
        type : String
    },
    deviceToken : {
        type : String,
        default : null
    },
    addedAt : {
        type : Number
    }
})

user.save().then((doc) =>{
    console.log('Saved User',doc);
    callback(true);
},(e) =>{
    console.log('Unable To Save User Data',e);
    callback(false);
})

// var newUser = User({
//     name : 'Neetish Mishra',
//     phone : '8726358251',
//     email : 'neetishmishra@gmail.com',
//     deviceToken : 'JHSDGFHJDASGFK31491KKG14'
// });


