
const mongoose  =require('mongoose');

const schema = mongoose.Schema;




const fullSchema = new schema({
    
    storetask:{
        type:String
    },
    ID:{
        type:String
    },
    sdescription:{
        type:String
       
    },
    sduration:{
        type:String
    }
})

 const Store= mongoose .model('Store',fullSchema);

 module.exports = Store;