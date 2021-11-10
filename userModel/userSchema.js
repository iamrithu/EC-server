const mongoose  =require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
    fullName:{
        type:String,
        required:[true,"name field is required"]
    },
    mobileNumber:{
        type:String,
        required:[true,"number field is required"]
    },
    eMail:{
        type:String,
        required:[true,"E-mail field is required"]
    },
    password:{
        type:String,
        required:[true,"password field is required"]
    },
    confirmPassword:{
        type:String,
        required:[true," Passwor field is required"]
    }

})

const User = mongoose .model('user',userSchema);


module.exports=User;