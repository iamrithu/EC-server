
const mongoose  =require('mongoose');

const schema = mongoose.Schema;




const completeSchema = new schema({
    
    CtaskName:{
        type:String
    },
   Cdescription:{
        type:String
       
    },
    Cduration:{
        type:String
    }
})

 const CompleteTask= mongoose .model('Completetask',completeSchema);

 module.exports = CompleteTask;