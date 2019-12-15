const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();
const axios = require('axios');
const port = 3000

app.use(express.urlencoded({extended: true})); 
app.use(express.json());   

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
  })

app.post('/submit-form', (req, res) => {
    const seconds = req.body.timer
    const topping = req.body.topping

    axios.post('http://localhost:5000/toast-handler', {
      time: seconds,
      topping
    })
    .then(response => { 
      time = response.data.time || null;
      topping = response.data.topping || null;
      if (time) {
        console.log(time);
      }
      else {
        console.log("Please add time");
      }
      if (topping) {
        console.log(`Topping ${topping} was added to your toast`);
      }
      else {
        console.log("Your toast does not have a topping");
      }
      res.end()
    })
    .catch(error => {
        console.log(error.response)
        res.end()
    });

  })

  app.listen(port, () => console.log(`Example app listening on port ${port}!`))