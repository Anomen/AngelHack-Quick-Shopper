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
    'backbone'
], function(Router) {

    App.router = new Router();

    // Starts Backbone app.
    Backbone.history.start();

    // Initialize the connection between client and server
    //d("Connecting to socket using ip: " + App.ip);
    //Backbone.io.connect(App.ip);

    // Set the BG depending of the device
    if (navigator.userAgent.toLowerCase().indexOf("android") > -1) // android
        $("#page-bg").css("background-image", "url(images/android_resources/android_bg.png)");
});
