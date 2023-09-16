const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
},{
    versionKey: false
});

const User = mongoose.model('User', userSchema);
module.exports = User;