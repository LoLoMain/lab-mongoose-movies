const express = require('express');
const router = express.Router();

const CelebrityModel = require('../models/celebrity-model.js');

//Iteration 2
router.get('/celebrities', (req, res, next)=>{
  CelebrityModel.find((err, celebrityResults)=>{
    if (err){
      next(err);
      return;
    }
    res.locals.blingList = celebrityResults;
    res.render('celebrity-views/celebrity-list-view.ejs');
  });
});

// Iteration 3
router.get('/celebrity-views/:id/details', (req,res,next)=>{

    CelebrityModel.findById(
          req.params.id,
      (err, celebrityDB)=>{
      if(err){
        next(err);
        return;
      }
      res.locals.celebDetails = celebrityDB;
      res.render('celebrity-views/show.ejs');
    });
});


// Iteration 4
//Step #1 of Form
router.get('/celebrity-views/new',(req, res, next)=>{
  res.render('celebrity-views/new.ejs');
});

//Step #2 of Form
router.post('/celebrities',(req,res, next)=>{
  const newCelebrityAdded = new CelebrityModel({
    name: req.body.celebrityName,
    occupation: req.body.celebrityOccupation,
    catchPhase: req.body.celebrityCatchPhrase
  });

  newCelebrityAdded.save((err)=>{
    if (err){
      next(err);
      return;
    }
    res.redirect('/celebrities');
  });
});



// DONT FORGET THIS!!!!
module.exports = router;
