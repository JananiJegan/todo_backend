require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router=require('./routes/tasks')
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
MONGO_URI=process.env.MONGO_URI;

app.use(cors(
    methods=['GET', 'POST', 'PUT', 'DELETE'],
    origin= '*'
));
app.use(express.json());

mongoose.connect(MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    }); 
})
.catch((err)=>{
    console.error("Error connecting to MongoDB", err);
})

app.use('/api/tasks',router);