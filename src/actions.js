var dispatcher = require('./dispatcher');
var constants = require('./constants');

var actions = {

  chirp : function(data){
    dispatcher.dispatch({
      actionType: constants.chirp,
      data: data
    });
  },

  chirped : function(data){
    dispatcher.dispatch({
      actionType: constants.chirped,
      data: data
    });
  },

  gotChirps: function(data){
    dispatcher.dispatch({
      actionType: constants.gotChirps,
      data: data
    });
  },

  gotCurrentUser: function(data){
    dispatcher.dispatch({
      actionType: constants.gotCurrentUser,
      data: data
    });
  },

  gotUsers: function(data){
    dispatcher.dispatch({
      actionType: constants.gotUsers,
      data: data
    });
  },

  follow: function(data){
    dispatcher.dispatch({
      actionType: constants.follow,
      data: data
    });
  },

  followed: function(data){
    dispatcher.dispatch({
      actionType: constants.followed,
      data: data
    });
  },

  unfollow: function(data){
    dispatcher.dispatch({
      actionType: constants.unfollow,
      data: data
    });
  },

  unfollowed: function(data){
    dispatcher.dispatch({
      actionType: constants.unfollowed,
      data: data
    });
  }





};

module.exports = actions;
