const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();
const axios = require('axios');
const port = 3000

app.use(express.urlencoded({extended: true})); 
app.use(express.json());   

app.get('/', function (req, res) {
    // Load file index.html
    res.sendFile(path.join(__dirname + '/index.html'));
  })

app.get('/toast-done', function (req, res) {
  res.send('YOUR TOAST IS DONE');
})

app.post('/submit-form', (req, res) => {
    const seconds = req.body.timer
    const topping = req.body.topping
    axios.post('http://localhost:5000/toast-handler', {
      time: seconds,
      topping
    })
    .then(response => { 
      let time = response.data.toast.time || null;
      let top = response.data.toast.topping || null;
      
      if (!time || !top){
        res.redirect('back');
      }
      res.redirect(`/toast-done?toastQuality=${quality}&topping=${top}`);
    })
    .catch(error => {
      console.log('ERROR: ' + error)
    });
    
  })

  app.listen(port, () => console.log(`Example app listening on port ${port}!`))