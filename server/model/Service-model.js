const mongoose = require('mongoose')
const schema = mongoose.Schema


let serviceSchema = new schema({

    serviceName: {
        type: String
    },
    servicePrice: {
        type: String
    },
}, {
    timestamps: true
})

const ServiceModel = mongoose.model('services', serviceSchema)

module.exports = ServiceModel