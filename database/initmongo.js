const mongoose = require('mongoose');

const url='mongodb+srv://Yash:Yash123@cluster0.pyn52.mongodb.net/Ecommerce?retryWrites=true&w=majority';

module.exports = function()
{
    return mongoose.connect(url);
}