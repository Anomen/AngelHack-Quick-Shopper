window.onload = function() {
    document.ontouchmove = function(e) {
        e.preventDefault();
    }
}

function t(text) {
    console.log(text);
}

function d(debugString) {
    console.log(debugString);
}

App = {
    ip          : "http://localhost:5000/",
    //ip          : "http://18.111.33.188:5000",
    router      : null,
    views       : {},
    collections : {}
};

require([
    'router', 
    'hackathon'
], function(Router) {

    App.router = new Router();

    // Starts Backbone app.
    Backbone.history.start();

    // Initialize the connection between client and server
    //d("Connecting to socket using ip: " + App.ip);
    //Backbone.io.connect(App.ip);
});
