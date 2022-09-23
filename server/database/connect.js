const mongoose = require('mongoose');

const connect = async() => {
    await mongoose.connect(
     'mongodb://localhost:27017/BarberBooking')
    console.log('Connect database succesful')
}

module.exports = connect;
