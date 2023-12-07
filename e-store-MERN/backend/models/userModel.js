const mongoose = require("mongoose") ;
const validator = require("validator") ;
const bcrypt = require("bcryptjs") ;
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required : [true,"Please enter the name"],
        maxlength:[30,"Name should not be more than 30 characters"],
        minlength:[4,"Name should be more than 4 characters"],
        trim:true
    },
    email:{
        type:String,
        required : [true,"Please enter the email"],
        unique:true ,
        validate:[validator.isEmail,"Please enter a valid email"],
        trim:true
    },
    password:{
        type:String,
        required : [true,"Please enter the password"],
        minlength:[8,"Password should be more than 8 characters"],
        select:false,
        trim:true
    },
    avatar:{
        public_id:{
            type:String,
            required : true 
        },
        url:{
            type : String,
            required:true
        }
    },
    role:{
        type:String,
        default:"user"
    },
    resetPasswordToken: String,
    resetPasswordExpire : Date
}) ;

//  Saving password in hash
userSchema.pre("save",async function(next){
    if(!this.isModified("password"))
    {
        next() ;
    }
    this.password = await bcrypt.hash(this.password,10) ;
})

//  JWT Token
userSchema.methods.getJWTToken = function () {
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE,
    })
}


module.exports = mongoose.model("User",userSchema) ;