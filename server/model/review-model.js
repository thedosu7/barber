const mongoose = require('mongoose')
const schema = mongoose.Schema


let reviewSchema = new schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'bookings'
    },
    description: {
        type: String
    },
}, {
    timestamps: true
})

const ReviewModel = mongoose.model('reviews', reviewSchema)

module.exports = ReviewModel