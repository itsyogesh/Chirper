var React = require('react');
var utils = require('../utils');
var Link = require('react-router').Link;
var moment = require('moment');

var ChirpBox = React.createClass({
  render: function() {
    var chirp = this.props.chirp;
    return (<li className="row chirp">
      <Link className='two columns' to='user' params={{id:chirp.userId }}>
      <img src={utils.avatar(chirp.email)} />
      </Link>
      <div className='ten columns'>
        <p>
          <strong>{chirp.fullname}</strong>
          <span className="timestamp">
            @{chirp.username} {moment(chirp.$created).fromNow()}
          </span>
        </p>
        <p> {chirp.text} </p>
      </div>
    </li>
    );
  }
})

module.exports = ChirpBox;
