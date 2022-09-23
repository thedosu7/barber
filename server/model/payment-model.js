const mongoose = require('mongoose')
const schema = mongoose.Schema


let paymentSchema = new schema({

    bill: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'bills'
    },
    payMethod: {
        type: String
    },
    payDate: {
        type: Date
    },

}, {
    timestamps: true
})

const PaymentModel = mongoose.model('payments', paymentSchema)

module.exports = PaymentModel