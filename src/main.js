var React = require('react');
var ReactRouter = require('react-router');

var Route = ReactRouter.Route;

var API = require('./API');
var ChirpStore = require('./stores/store');

var routes = (<Route handler={require('./components/App')}>
  <Route name="home" path="/" handler={require('./components/Home')} />
</Route>);

API.fetchChirps();

ReactRouter.run(routes, ReactRouter.HistoryLocation, function (Root){
  React.render(<Root />, document.getElementById('app'));
});
