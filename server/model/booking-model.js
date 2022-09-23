const mongoose = require('mongoose')
const schema = mongoose.Schema


let bookingSchema = new schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'services'
    },
    bookingDate: {
        type: String
    },
    bookingTime: {
        type: String
    }
}, {
    timestamps: true
})

const BookingModel = mongoose.model('bookings', bookingSchema)

module.exports = BookingModel