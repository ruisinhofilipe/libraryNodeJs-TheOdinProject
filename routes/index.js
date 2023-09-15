var express = require('express');
var router = express.Router();

const messageModel = require('../models/message');

/* GET home page. */
router.get('/', function(req, res, next) {

  messageModel.find()
    .then((result) => {
      res.render('index', { title: 'Mini Message Board - The Odin Project', author: 'Rui', messages: result });
    })
    .catch((error) => {
      console.log(error)
    })
});


router.post('/new', (req, res, next) => {
  // const user = req.body.user;
  // const message = req.body.messageUser;
  const {user, messageUser} = req.body;

  if(user.trim() !== '' && messageUser.trim() !== ''){

    const newMessage = new messageModel({
      user,
      message: messageUser
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
