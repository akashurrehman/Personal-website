const nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();
var Message=require('../Models/Message')

const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'fa19-bse-112@cuilahore.edu.pk',
        pass: 'osecct@cui7',
    },
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Pages/index');
});
router.get('/home', function(req, res, next) {
  res.render('Pages/index');
});
router.get('/about',function(req,res){
  res.render('Pages/about');
})
router.get('/services',function(req,res){
  res.render('Pages/services')
})
router.get('/portofolio',function(req,res){
  res.render('Pages/portofolio')
})
router.get('/blog',function(req,res){
  res.render('Pages/Blog')
})
router.get('/contact',function(req,res){
  res.render('Pages/contact')
})

router.post('/message',async function(req,res){
  
  try{
    let message= new Message();
    message.text=req.body.text;
    message.name=req.body.name;
    message.email=req.body.email;
    await message.save();
    
    const mailOptions = {
    from: 'fa19-bse-112@cuilahore.edu.pk',
    to: req.body.email,
    subject: 'hello From Email!',
    html: 'hello world!',
  };
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    }
    console.log("Message sent:");
});

    res.redirect('/contact')
  }
  catch(err){
    res.status(400).send("Cannot Send Message")
  }
  
});
module.exports = router;
