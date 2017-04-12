var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Game       = require('../models/Game');
var updateScore={};
 updateScore.updateScore = function(router){
 router.route('/update/:playerName').put(function(req, res) {
        Game.findOne({player: req.params.playerName},{upsert: true}, function(err, game) {
            if (err)
                return res.send(err);
            console.log(game)
            game.player        = req.body.player;
            game.stepCount       = req.body.stepCount;
              console.log("new score: "+game)
            game.save(function(err) {
                if (err)
                    return res.send(err);
                res.json({ message: 'Score updated!' });
            });
        });
    });
};
module.exports = updateScore;
