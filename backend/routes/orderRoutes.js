const router = require('express').Router();
let Order = require('../models/orderModel');

router.route('/').get((req, res) => {
    Order.find()
      .then(order => res.json(order))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const name = req.body.name;
    const phone = Number(req.body.phone);
    const parcel = req.body.parcel;
    const paymentMthd = req.body.paymentMthd;
    const payment = Number(req.body.payment);
    const add = req.body.add;
    const date = Date.parse(req.body.date);
    const order = req.body.order;

    const newOrder = new Order({
        name, 
        phone,
        parcel,
        paymentMthd,
        payment,
        add,
        date,
        order,
    });

    newOrder.save()
    .then(()=> res.json('Order added'))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').delete((req,res) => {
    Order.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Order deleted'))
    .catch(err=> res.status(400).json('Error: ' + err))
})



module.exports = router