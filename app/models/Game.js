var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var gameSchema   = new Schema({
    player: String,
    stepCount : Number,
});
module.exports = mongoose.model('score', gameSchema);

