const mongoose = require('./mongoose');
const Group = require('../db/group');

let userSchema = new mongoose.Schema({
    mail: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String
    },
    groups: {type: Array},
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);