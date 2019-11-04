const express = require("express");
const connectDB = require('./db/db')
// const client = require('mongoose');
require('dotenv').config()
const bodyParser = require('body-parser')
var cors = require('cors');

const app = express();
app.use(cors());

connectDB()

app.use(express.json({extended: false}))
app.use(bodyParser.json())

app.get("/", (res, req) => {
	
  res.send("Hello Bora");
});

app.use('/api/comments', require('./routes/comments'))
app.use('/api/likes', require('./routes/likes'))

app.listen(process.env.PORT, () => {
  console.log(`Server is Listening on port ${process.env.PORT}`);
});
