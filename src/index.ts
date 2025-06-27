import express from 'express';
import cors from "cors";
import multer from 'multer';
import mongoose from "mongoose";
import { isLoginForm, isRegistrationForm } from './typeManager';
import { UserModel } from './mongoDbModels';
import { compare } from 'bcrypt';
import { JsonWebTokenError, JwtPayload, NotBeforeError, sign, TokenExpiredError, verify, VerifyErrors, VerifyOptions } from "jsonwebtoken"

mongoose.connect('mongodb://localhost:27017/UniBridge');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection ERROR:'));
db.once('open', function() {
    console.log('Mongo DB is Successfully Connected!');
});

const JWT_SECRET_KEY = "my_secret_key" // Move it to proccessenv after

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
const jsonParser = express.json()


const genLongToken = (username: string) => {
  // Gen long token here
  return sign({username: username}, 
  JWT_SECRET_KEY, {
    expiresIn: 2629746, // 1 month
    issuer: "longTokenGenerator"
  }
);
}

const genShortToken = (username: string) => {
  // Gen short token here
  return sign({username: username}, 
  JWT_SECRET_KEY, {
    expiresIn: 3600, // 1 hour
    issuer: "shortTokenGenerator"
  });
}

server.post('/login', upload.none(), async (req, res) => { // Post endpoint for login
  if(isLoginForm(req.body)){
    try {
      const user = await UserModel.findOne({username: req.body.username}) // Check if user exists

      if(isRegistrationForm(user)){ // User's type in DB is the same, that in registration, so we can check for user type by registration type check
        if(user) {
          if(await compare(req.body.password, user.password)){

            // Send token here
            const token = genLongToken(req.body.username)

            res.status(200).json({"tokenLong": token}) // If password correct
          } else {
            res.sendStatus(401); // If password is incorrect
          }
        } else {
          res.sendStatus(404); // If there aren't any user with that username
        }
      } else {
        res.sendStatus(503); // If DB result isn't as user type
      }
    } catch (err) {
      console.log("ERROR aquired in login endpoint while working with DB:\n", err)
      res.sendStatus(500); // If internal server error
    }
  } else {
    res.sendStatus(400) // If data isn't login type
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
        
        // Send token here
        const token = genLongToken(req.body.username)

        res.status(200).json({"tokenLong": token}) // If user added successfully
      } else { // If user already in DB
        res.sendStatus(409); // If user with that username exists
      }
    } catch (err) {
      console.log("ERROR aquired in registration endpoint while working with DB:\n", err)
      res.sendStatus(500); // If internal server error
    }
    
  } else {
    res.sendStatus(400) // If registration isn't login type
  }
})

server.post('/updateToken', jsonParser, async (req, res) => { // Post endpoint for registration
  const longToken = req.body.tokenLong
  if (longToken){
    verify(longToken, JWT_SECRET_KEY, {issuer: "longTokenGenerator"}, (err, decoded) => {
      if (err?.name === 'TokenExpiredError'){
        res.sendStatus(401) // Sending user to relogin if token is expired
      } else if (err) {
        res.sendStatus(400) // If some troubles with verifing jwt
      } else {
        const username = (decoded as JwtPayload)?.username

        if (username){
          // Send token here
          const token = genShortToken(username)

          res.status(200).json({"tokenShort": token}) // If user successfully updated short token
        } else {
          res.sendStatus(400) // If jwt form is different
        }
      }
    })
  } else {
    res.sendStatus(401) // Sending user to relogin if there are no token
  }
})

server.get('/getuserdata', jsonParser, async (req, res) => { // Post endpoint for registration
  const shortToken = req.body.tokenShort
  if (shortToken){
    verify(shortToken, JWT_SECRET_KEY, {issuer: "shortTokenGenerator"}, async (err, decoded) => {
      if (err?.name === 'TokenExpiredError'){
        res.sendStatus(401) // Sending user message to update short token
      } else if (err) {
        res.sendStatus(400) // If some troubles with verifing jwt
      } else {
        const username = (decoded as JwtPayload)?.username

        if (username){
          // Send user data here
          try {
            const user = await UserModel.findOne({username: username}) // Try to get user from DB
            if (user){ // If user with that username exists
              res.status(200).json({"username": user.username, "email": user.email}) // If user added successfully
            } else {
              res.sendStatus(404); // If user doesn't exist
            }
          } catch (err) {
            console.log("ERROR aquired in getuserdata endpoint while working with DB:\n", err)
            res.sendStatus(500); // If internal server error
          }
        } else {
          res.sendStatus(400) // If jwt form is different
        }
      }
    })
  } else {
    res.sendStatus(403) // Sending user forbidden if there aren't any short token
  }
})

server.listen(PORT, (err) =>{
  if(!err){
    console.log("Server is Successfully Running!\n\tPORT: "+ PORT);
  } else {
    console.log("Error occurred, server can't start!\n\tERROR: ", err);
  } 
});