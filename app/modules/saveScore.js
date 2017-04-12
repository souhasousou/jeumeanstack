var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Game       = require('../models/Game');
var saveScore={};
saveScore.savescore = function(router){
router.route('/score').post(function(req, res) {
          var game = new Game();
          game.player        = req.body.player;
          game.stepCount       = req.body.stepCount;
          game.save(function(err) {
              if (err)
                  res.send(err);
              res.json({ message: 'the new player and his score were succefully added to the database' });
          });
      });
};
module.exports = saveScore;
