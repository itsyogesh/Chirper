var assign = require('object-assign');
var EventEmitterProto = require('event').EventEmitter.prototype;

var storeMethods = {
  init: function(){},
  set: function(arr){
    var currIds = this._data.map(function(m) {return m.cid});
    arr.filter(function (item){
      return currIds.indexOf(item.cid) === -1
    }).forEach(this.add.bind(this));
  },
  add: function (item){
    this._data.push(item);
  },
  all: function() {
    return this._data;
  },
  get: function(id) {
    return this._data.filter(function(item) {
      return item.cid === id;
    })[0];
  }

};

exports.extend = function(methods){

  var store = {
    _data : [],
    actions: {}
  };

  assign(store, EventEmitterProto, storeMethods, methods);
}
