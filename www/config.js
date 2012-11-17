/**
 * Global configuration of requirejs.
 */
var require = {
    shim: {
        'transit': {
            deps: ['jquery']
        },
        'socketio': {
            exports: 'io'
        },
        'backbone': {
            deps   : ['underscore', 'jquery', 'transit'],
            exports: 'backbone'
        },
        'backboneio': {
            deps   : ['backbone', 'socketio'],
            exports: 'Backbone'
        },
        'hackathon': {
            deps   : ['backboneio', 'iscroll'],
            exports: 'Hackathon'
        },
        'cordova': {
            deps   : [],
            exports: 'Cordova'
        },
        'barcodescanner': {
            deps   : ['cordova']
        }
    },
    paths: {
        backboneio : 'libs/backbone.io',
        backbone   : 'libs/backbone',
        hackathon  : 'libs/backbone.hackathon',
        socketio   : 'libs/socket.io',
        underscore : 'libs/underscore',
        jquery     : 'libs/jquery',
        transit    : 'libs/jquery.transit',
        text       : 'libs/text',
        iscroll    : 'libs/iscroll',
        cordova    : 'libs/cordova-2.1.0-' + (navigator.userAgent.toLowerCase().indexOf("android") > -1 ? 'android' : 'ios'),
        barcodescanner : 'libs/barcodescanner-' + (navigator.userAgent.toLowerCase().indexOf("android") > -1 ? 'android' : 'ios')
    }
};
