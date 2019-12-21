const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();
const axios = require('axios');
const port = 3000
// This is where all the orders are gonna be stored
let orders =  []

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

function checkToastState(time) {
  if (time < 30) {
    toastState = "warm";
  }
  else if (time > 30 && time <= 60) {
    toastState = "medium"
  }
  else if (time > 60 && time <= 90) {
    toastState = "crungy"
  }
  else {
    toastState = "burned"
  }
  return toastState
}

// Prepare the toast function
function prepareToast(time, topping, username) {
  let toastState = checkToastState(time);

  
  // Turn seconds into milliseconds
  time = Number(time) * 1000;
  // Wait the amount of time the users requested
  setTimeout( function () 
  { 
     orders.push({
       username,
       topping,
       toastState,
     })
  }, time);
}

// ExpressJS Requests and Response are Asynchronous by default
app.post('/toast-handler', (req, res) => {
  prepareToast(req.body.time, req.body.topping, req.body.username)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.send(orders);
})

// Request to get all the finished orders
app.get('/finished-orders', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.send(orders);
}) 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))