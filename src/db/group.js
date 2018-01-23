const mongoose = require('./mongoose');

let groupSchema = new mongoose.Schema({
    groupName: {
        type: String,
        unique: true,
        required: true
    },
    users: {
        type: Array
    }
})

module.exports = mongoose.model('Groups', groupSchema);