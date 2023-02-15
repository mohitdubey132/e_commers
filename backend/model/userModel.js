const mongoose = require('mongoose');
const validator = require('validator');
const { stringify } = require('querystring');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required '],
        maxLength: [30, 'name can extend from 30 charactors'],
        minLength: 4
    },
    email: {
        type: String,
        required: [true, 'please enter email'],
        unique: true,
        validate: [validator.isEmail, 'enter valid email']

    },
    password: {
        type: String,
        maxLength: [15, 'password can not go 1 charactors'],
        select: false,
        required: true
    },
    role: {
        type: String,
        default: "user"
    },
    avtar:
    {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date

}
);

// password hashing 
userSchema.pre("save", async function (next) {

    if (!this.isModified('password')) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10);
});


// createing jwt token for user authontication 
userSchema.methods.getJWTToken = function(){
    console.log('jwt token ')
    return JWT.sign({ id: this._id, }, process.env.JWT_SECRET);
};

module.exports = mongoose.model('user', userSchema);