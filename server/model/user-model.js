const mongoose = require('mongoose')
const schema = mongoose.Schema


let userSchema = new schema({

    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'roles'
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    role: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    address: {
        type: String
    }
}, {
    timestamps: true
})

const UserModel = mongoose.model('users', userSchema)

module.exports = UserModel