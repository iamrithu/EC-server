const mongoose = require('mongoose');
const schema  = mongoose .Schema;

const computerSchema = new schema({
    computerName:{
        type:String,
        required:[true,'name field is required']
    },
    computerPrice:{
        type:Number,
        required:[true,"price field is required"]
    }
})

const Computer = mongoose.model('computer',computerSchema);

module.exports= Computer;
