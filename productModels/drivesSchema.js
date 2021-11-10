const mongoose = require('mongoose');

const schema = mongoose .Schema;

const drivesSchema = new schema({
    driveName:{
        type:String
    },
    drivePrice:{
        type:Number
    }
})

const drives = mongoose.model('drives',drivesSchema);
 
module.exports=drives;