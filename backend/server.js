const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://riri13:S0SHazlfn5DbVjng@tteok.4cimfhg.mongodb.net/?retryWrites=true&w=majority");
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const orderRouter = require ('./routes/orderRoutes');

app.use('/orders', orderRouter);

app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`);
});