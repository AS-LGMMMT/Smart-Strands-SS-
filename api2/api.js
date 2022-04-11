const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://keerat242:Rashi2340%23@cluster0.pdtca.mongodb.net/database', {useNewUrlParser: true, useUnifiedTopology: true });
const express = require('express');
const user = require('./models/user'); 
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const port = process.env.PORT ||3100;

app.get('/api/test', (req, res) => {
  res.send('The API is working!');
});

app.post('/api/user', (req, res) => {
    const { name2,phoneno2,email2, service } = req.body;
    const newuser = new user({
      name2,
      phoneno2,
      email2,
      service
    });
    newuser.save(err => {
      return err
        ? res.send(err)
        : res.send('successfully added device and data');
    });
  });

  app.get('/api/user', (req, res) => {
    user.find({}, (err, user) => {
      if (err == true) {
        return res.send(err);
      } else {
        return res.send(user);
      }
    });
  
  });
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
