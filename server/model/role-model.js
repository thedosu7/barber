const mongoose = require('mongoose')
const schema = mongoose.Schema


let roleSchema = new schema({

    role: {
        type: String
    },

}, {
    timestamps: true
})

const RoleModel = mongoose.model('roles', roleSchema)

module.exports = RoleModel