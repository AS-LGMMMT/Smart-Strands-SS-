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
const port = 5000;


app.post('/api/user', (req, res) => {
  const { name1, username1,phoneno1, password1 } = req.body;
  const newuser = new user({
    name1,
    username1,
    phoneno1,
    password1
  });
  newuser.save(err => {
    return err
      ? res.send(err)
      : res.send('successfully added user and its data');
  });
});

app.get('/api/users', (req, res) => {
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
