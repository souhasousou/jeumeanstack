var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Game       = require('../models/Game');
var viewScores={};
 viewScores.viewscores = function(router){
  router.route('/liste').get(function(req, res) {
  Game.find(function(err, scores) {
      if (err)
          res.send(err);
      res.json(scores);
  });
});
};
module.exports = viewScores;
