const mongoose  = require('mongoose');
const schema = mongoose.Schema;

const mobileSchema = new schema({
    mobileName:{
        type:String,
        required:[true,"mobileName field is required"]
    },
    mobilePrice:{
        type:Number,
        required:[true,'mobilePrice field is required']
    }
    
})

const mobiles = mongoose.model('mobile',mobileSchema);

module.exports= mobiles;