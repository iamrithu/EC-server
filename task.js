
const mongoose  =require('mongoose');

const schema = mongoose.Schema;




const taskSchema = new schema({
    
    taskName:{
        type:String
    },
   description:{
        type:String
       
    },
    duration:{
        type:String
    }
})

 const Task= mongoose .model('task',taskSchema);

 module.exports = Task;