import express from 'express';
import cors from "cors";
import multer from 'multer';
import mongoose from "mongoose";
import { isLoginForm, isRegistrationForm } from './typeManager';
import { UserModel } from './mongoDbModels';
import { compare } from 'bcrypt';

mongoose.connect('mongodb://localhost:27017/UniBridge');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection ERROR:'));
db.once('open', function() {
    console.log('Mongo DB is Successfully Connected!');
});

const server = express()
const PORT = 8080

const corsOptions = {  
  origin: 'http://localhost:3000', // Allow origins
  methods: 'GET, POST, PUT, DELETE', // Allow methods
  allowedHeaders: 'Content-Type,Authorization' // Allow specific headers
}; 

// Server atachements 
server.use(cors(corsOptions))

// Creating multer for FormData parse
const upload = multer();  

server.post('/login', upload.none(), async (req, res) => { // Post endpoint for login
  if(isLoginForm(req.body)){
    try {
      const user = await UserModel.findOne({username: req.body.username}) // Check if user exists

      if(isRegistrationForm(user)){ // User's type in DB is the same, that in registration, so we can check for user type by registration type check
        if(user) {
          if(await compare(req.body.password, user.password)){
            // Send token here
            res.sendStatus(200);
          } else {
            res.sendStatus(401);
          }
        } else {
          res.sendStatus(404);
        }
      } else {
        res.sendStatus(503);
      }
    } catch {
      console.log("ERROR aquired in login endpoint while working with DB")
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(400)
  }
})

server.post('/registration', upload.none(), async (req, res) => { // Post endpoint for registration
  if(isRegistrationForm(req.body)){

    try {
      const user = await UserModel.findOne({username: req.body.username}) // Try to get user from DB

      if (!user){ // If user doesn't exist
        UserModel.insertOne({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
        })

        res.sendStatus(200);
      } else { // If user already in DB
        res.sendStatus(409);
      }
    } catch {
      console.log("ERROR aquired in registration endpoint while working with DB")
      res.sendStatus(500);
    }
    
  } else {
    res.sendStatus(400)
  }
})

server.listen(PORT, (error) =>{
  if(!error){
    console.log("Server is Successfully Running!\n\tPORT: "+ PORT);
  } else {
    console.log("Error occurred, server can't start!\n\tERROR: ", error);
  } 
});