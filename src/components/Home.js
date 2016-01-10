var React = require('react');
var ChirpInput = require('./ChirpInput');
var actions = require('../actions');
var ChirpList = require('./ChirpList');

var ChirpStore = require('../stores/chirps');

var Home = React.createClass({
  getInitialState: function(){
    return {
      chirps: ChirpStore.all()
    }
  },
  componentDidMount: function(){
    ChirpStore.addChangeListener(this.onChange);
  },
  onChange: function(){
    this.setState(this.getInitialState());
  },
  componentWillUnmount: function(){
    ChirpStore.removeChangeListener(this.onChange);
  },
  render: function() {
    return (
      <div>
        <ChirpInput onSave={this.saveChirp} />
        <ChirpList chirps={this.state.chirps} />
      </div>

    );
  },
  saveChirp: function(text){
    actions.chirp(text);
  }
});

module.exports = Home;
