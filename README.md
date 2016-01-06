## Getting started with React and Flux

I started this as a learning example to understand how to use the flux architecture with react. It's a simple microblogging app.

Install the required dependencies with
```
npm install
```

Install *gulp* as a global module. Type
```
npm install -g gulp
```

To start the application, you need to run all the gulp tasks required to transpile jsx code to es5. I am also using browserify. To run, type:


```
gulp browserify
```

Hopefully, there would be no errors.

To serve the app, type
```
node server
```
