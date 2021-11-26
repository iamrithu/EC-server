const express = require('express');
const router = express.Router();
const Mobile = require('../productModels/mobileShema');
const Computer = require('../productModels/computerSchema');
const Drive = require('../productModels/drivesSchema');
const User = require('../userModel/userSchema');
const Task = require('../userModel/task');
const CompleteTask = require('../userModel/completeTask');
const Store =require("../userModel/store")

//mobile
//get
router.get('/mobile', (req, res) => {
    Mobile.find()
    .then((data)=>{
        res.send(data)
    })
    
})
//post
router.post('/mobile', (req, res) => {
    console.log(req.body);
    Mobile.create(req.body)
    .then((data)=>{
        res.send(data);
    })
})
//put
router.put('/mobile/:id',(req,res)=>{
    Mobile.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(()=>{
        Mobile.findOne({_id:req.params.id})
        .then((data)=>{
            res.send(data)
        })
    })
})
//delete
router.delete('/mobile/:id', (req, res) => {
    Mobile.findByIdAndRemove({_id:req.params.id})
    .then((data)=>{
        res.send(data)
    })
    })

    //--------------------------

//computer

//get

router.get('/computer',(req,res)=>{
    Computer.find()
    .then((data)=>{
        res.send(data);
    })
})
//post
router.post('/computer', (req, res) => {
    console.log(req.body);
    Computer.create(req.body)
    .then((data)=>{
        res.send(data);
    })
})
//update
router.put('/computer/:id',(req,res)=>{
    Computer.findOneAndUpdate({_id:req.params.id},req.body)
    .then(()=>{
        Computer.findOne({_id:req.params.id})
        .then((data)=>{
            res.send(data)
        })
    })
})
//delete
router.delete('/computer/:id',(req,res)=>{
    Computer.findByIdAndRemove({_id:req.params.id})
    .then((data)=>{
        res.send(data);
    })
})

//--------------------

//drives

//get

router.get('/drive',(req,res)=>{
    Drive.find()
    .then((data)=>{
        res.send(data);
    })
})
//post
router.post('/drive',(req,res)=>{
    console.log(req.body);
    Drive.create(req.body)
    .then((data)=>{
        res.send(data);
    })
})
//update
router.put('/drive/:id',(req,res)=>{
    Drive.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(()=>{
        Drive.findOne({_id:req.params.id})
        .then((data)=>{
            res.send(data)
        })
    })
})
router.delete('/drive/:id', (req, res) => {
    Drive.findByIdAndRemove({_id:req.params.id})
    .then((data)=>{
        res.send(data)
    })
    })

   //-------------------------
   
   //user

   //get

   router.get('/user',(req,res)=>{
       User.find()
       .then((data)=>{
           res.send(data);
       })
   })

   router.delete('/user/:id', (req, res) => {
    User.findByIdAndRemove({_id:req.params.id})
    .then((data)=>{
        res.send(data)
    })
    })
   
   //post

   router.post('/user',(req,res)=>{
       console.log(req.body)
       User.create(req.body)
       .then((data)=>{
           res.send(data);
       })
   })
   router.post('/user/:id',(req,res)=>{
   
    User.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(()=>{
        User.findOne({_id:req.params.id})
        .then((data)=>{
            res.send(data)
        })
    })

})
 //put

 
 router.put('/user/:id',(req,res)=>{
    User.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(()=>{
        User.findOne({_id:req.params.id})
        .then((data)=>{
            res.send(data)
        })
    })

})

router.put('/users/:id',(req,res)=>{
    User.findOneAndUpdate({eMail:req.params.id},req.body)
    .then(()=>{
        User.findOne({eMail:req.params.id})
        .then((data)=>{
            res.send(data)
        })
    })
   
})
router.get('/users/:id',(req,res)=>{
    User.findOne({eMail:req.params.id})
    .then((data)=>{
        res.send(data);
    })
})
router.get('/usersid/:id',(req,res)=>{
    User.findOne({_id:req.params.id})
    .then((data)=>{
        res.send(data);
    })
})

//task

//get 
router.get('/task', (req, res) => {
    Task.find()
    .then((data)=>{
        res.send(data)
    })
    
})
//post
router.post('/task', (req, res) => {
    console.log(req.body);
    Task.create(req.body)
    .then((data)=>{
        res.send(data);
    })
})
//put
router.put('/task/:id',(req,res)=>{
    Task.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(()=>{
        Task.findOne({_id:req.params.id})
        .then((data)=>{
            res.send(data)
        })
    })
})
router.put('/tasks/:id',(req,res)=>{
    Task.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(()=>{
        Task.findOne({_id:req.params.id})
        .then((data)=>{
            res.send(data)
        })
    })
})
//delete
router.delete('/task/:id', (req, res) => {
    Task.findByIdAndRemove({_id:req.params.id})
    .then((data)=>{
        res.send(data)
    })
    })
//-----------------------

//Complete task
//get
router.get('/Ctask', (req, res) => {
    CompleteTask.find()
    .then((data)=>{
        res.send(data)
    })
    
})
//post
router.post('/Ctask', (req, res) => {
    console.log(req.body);
    CompleteTask.create(req.body)
    .then((data)=>{
        res.send(data);
    })
})
//put
router.put('/Ctask/:id',(req,res)=>{
    CompleteTask.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(()=>{
        CompleteTask.findOne({_id:req.params.id})
        .then((data)=>{
            res.send(data)
        })
    })
})
//delete
router.delete('/Ctask/:id', (req, res) => {
    CompleteTask.findByIdAndRemove({_id:req.params.id})
    .then((data)=>{
        res.send(data)
    })
    })

    //

    //store

   //get
router.get('/store', (req, res) => {
    Store.find()
    .then((data)=>{
        res.send(data)
    })
    
})
router.get('/store/:id', (req, res) => {
    Store.find({ID:req.params.id})
    .then((data)=>{
        res.send(data)
    })
    
})
//post
router.post('/store', (req, res) => {
    console.log(req.body);
    Store.create(req.body)
    .then((data)=>{
        res.send(data);
    })
})
//put
router.put('/store/:id',(req,res)=>{
    Store.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(()=>{
        Store.findOne({_id:req.params.id})
        .then((data)=>{
            res.send(data)
        })
    })
})
//delete
router.delete('/store/:id', (req, res) => {
    Store.findByIdAndRemove({_id:req.params.id})
    .then((data)=>{
        res.send(data)
    })
    })

module.exports = router;