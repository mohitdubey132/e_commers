const User = require('../model/userModel');
const ErrorHandler = require('../utiles/errorHandler');
const catchAsyncErr = require('../middleware/chatchAsyncError');
const chatchAsyncError = require('../middleware/chatchAsyncError');
const { findOne } = require('../model/userModel');

//Resgistr new user 
exports.Resgistr = catchAsyncErr(async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await (User.create({
        name,
        email,
        password,
        avtar: {
            public_id: "sample id ",
            url: "profile url"
        }
    }));

    const token = user.getJWTToken();
    res.status(201).json({
        success: true,
        user,
        message: "user created",
        token: token
    })
});

exports.LoginUser = chatchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;
    // checking if the user has enter the pasword and email both
    if (!email || !password) {
        return next(new ErrorHandler("enter email id and password ", 400));
    }

    const user = await User.findOne({ email }).select("+password")
    if (!user) {
        return next(new ErrorHandler("invalid email or password"));
    }
    const ispasswordMatch = await user.compairPassword(password);
    if(!ispasswordMatch){
        return next(new ErrorHandler('invaild eamil or password',400));
    }
    const token = user.getJWTToken();
    res.status(200).cookie({token}).json({
        success:true,
        message:`user ${user.name} found successfully`,
        token
    });

});



/** password reset token */
const resetPassword = catchAsyncErr(async (req,res,next)=>{
    
});