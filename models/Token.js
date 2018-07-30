var mongoose = require('mongoose');

var TokenSchema = new mongoose.Schema({
    date:{
        type: String
    },
    token:[{
        time:{
            type: String
        },
        key:{
            type: Number
        }
    }]
});

module.exports = mongoose.model('Token', TokenSchema);
