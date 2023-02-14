const User = require('../model/userModel');
const ErrorHandler = require('../utiles/errorHandler');
const catchAsyncErr = require('../middleware/chatchAsyncError');

//Resgistr new user 
exports.Resgistr = catchAsyncErr(async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await (User.create({
        name,
        email,
        password,
        avtar:{
            public_id:"sample id ",
            url:"profile url"
        }
    }));

    const token = user.getJWTToken();
    res.status(201).json({
        success:true,
        user,
        message:"user created",
        token:token
    })
});

/** */