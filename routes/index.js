var express = require('express');
var router = express.Router();

const messageModel = require('../models/message');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', author: 'Rui' });
});


router.post('/new', (req, res, next) => {
  
  // const {user, message} = req.body;

  const user = req.body.user;
  const message = req.body.messageUser;

  const newMessage = new messageModel({
    user,
    message
  });
  
  if(user.trim() !== '' && message.trim() !== ''){
    const newMessage = new messageModel({
      user,
      message
    });
    newMessage.save()
      .then((result) => {
        console.log(result);
        res.redirect('/');
      })
      .catch((error) => {
        console.log(error);
      })
  }else{
    let errorMessage = "Form not completed.";
    res.render('form', {errorMessage})
  }

});


module.exports = router;
