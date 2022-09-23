const mongoose = require('mongoose')
const schema = mongoose.Schema


let billSchema = new schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    barber: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'barbers'
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'services'
    },
    billDate: {
        type: String
    },
}, {
    timestamps: true
})

const BillModel = mongoose.model('bills', billSchema)

module.exports = BillModel