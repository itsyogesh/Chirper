var router = require('express').Router();
var login = require('./login');

var db = new (require('locallydb'))('./.data');
var chirps = db.collection('chirps');

var chirpsRouter = router.route('/api/chirps')
  .all(login.required)
  .get(function (req, res){
    res.json(chirps.toArray());
  })
  .post(function (req, res){
    var chirp = req.body;
    chirp.userId = req.user.cid;

    //todo be removed
    chirp.username = req.user.username;
    chirp.fullname = req.user.fullname;
    chirp.email = req.user.email;

    var id = chirps.insert(chirp);
    res.json(chirps.get(id));
  });

module.exports = chirpsRouter;