const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/moviecelebapp');

const CelebrityModel = require('../models/celebrity-model.js');

const celebrityInfo =[
  {
    name: 'Cardi B',
    occupation: 'rapper',
    catchPhase: "Naw I'm shay-in??"
  },
  {
    name: 'The Joker',
    occupation: ' General bad guy and Batman hater',
    catchPhase: "Why so serious?"
  },
  {
    name: 'Mr. T',
    occupation: 'professional wrestler',
    catchPhase: "I pity the fool!"
  },
];

// To create in the DataBase
CelebrityModel.create(
  celebrityInfo,
  (err, celebrityResults)=>{
    if(err){
      console.log('No DataBase Stuffs for you!');
      return;
    }
    celebrityResults.forEach((oneCelebrity)=>{
      console.log('Say hello to ' + oneCelebrity.name);
    });
  }
);
