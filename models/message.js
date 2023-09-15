const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messagesSchema = new Schema(
    {   
        user: 
        {
            type: String,
            required: true
        },
        message: 
        {
            type: String,
            required: true
        }
    }, { timestamps: true } 
);


const Messages = mongoose.model('Message', messagesSchema);

module.exports = Messages;