const express = require('express');
const router = express.Router();
const Mobile = require('../productModels/mobileShema');
const Computer = require('../productModels/computerSchema');
const Drive = require('../productModels/drivesSchema');
const User = require('../userModel/userSchema')

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
    Computer.findByIdAndUpdate({_id:req.params.id},req.body)
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
   //post

   router.post('/user',(req,res)=>{
       console.log(req.body)
       User.create(req.body)
       .then((data)=>{
           res.send(data);
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




module.exports = router;