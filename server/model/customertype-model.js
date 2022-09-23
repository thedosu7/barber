const mongoose = require('mongoose')
const schema = mongoose.Schema


let customertypeSchema = new schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    description: {
        type: String
    }
}, {
    timestamps: true
})

const CustomertypeModel = mongoose.model('customertypes', customertypeSchema)

module.exports = CustomertypeModel