var constants = require('../constants');

var ChirpStore = require('./store').extend({
  init: function(){
    this.bind(constants.gotChirps, this.set);
    this.bind(constants.chirped, this.add);
  }
});

module.exports = ChirpStore;
