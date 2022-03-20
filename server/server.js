const express = require('express');
const app = express();
const port = 3000;
const base = `${__dirname}/public`;
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.sendFile(`${base}/login.html`);
  });
  app.get('/signup', (req, res) => {
    res.sendFile(`${base}/signup.html`);
  });
  app.get('/menu', (req, res) => {
    res.sendFile(`${base}/menu.html`);
  });
app.listen(port, () => {
console.log(`listening on port ${port}`);
});
