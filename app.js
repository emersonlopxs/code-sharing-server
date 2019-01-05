const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(cors());

mongoose.set('debug', true);
// promisses not callbacks
mongoose.Promise = Promise;
mongoose.connect(
  'mongodb://emerson_code:semlimites1122@ds147003.mlab.com:47003/code',
  {
    keepAlive: true
  }
);

// Code schema
const Schema = mongoose.Schema;

const CodeSchema = new Schema({
  title: String,
  code: String,
  date: {
    type: Date,
    default: Date.now
  }
});

// turning the schema to a model
const Code = mongoose.model('Code', CodeSchema);

app.get('/api/all', (req, res) => {
  Code.find().then(codes => {
    res.status(201).json(codes);
  });
});

app.post('/api', (req, res) => {
  // const data = req.body.code;
  Code.create(req.body)
    .then(newCode => {
      // 201 is the status for created
      res.status(201).json(newCode);
    })
    .then(err => {
      res.send(err);
    });
});

// process.env.PORT is the port to run on the heroku servers
app.listen(process.env.PORT || 3000, () => console.log('server is running on port 3000'));

