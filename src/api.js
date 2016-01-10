var actions = require('./actions');

var API = {
  fetchChirps: function () {

    get('/api/chirps').then(actions.gotChirps.bind(actions));

  }

};

module.exports = API;

function get(url) {
  return fetch(url, {
    credentials: 'same-origin'
  }).then(function(res){
    return res.json();
  });
}
