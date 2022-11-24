const mongoose = require('mongoose');

const Schema= mongoose.Schema;

const orderSchema = new Schema({
    name: {type:String},
    phone: {type: Number},
    parcel: {type: String},
    paymentMthd: {type: String},
    payment: {type:Number},
    add:{type: String},
    date:{type: Date}, 
    order:[
        {
        product:{type:String},
        qt: {type: Number},
        itemTots: {type: Number}
        }
    ]
})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
