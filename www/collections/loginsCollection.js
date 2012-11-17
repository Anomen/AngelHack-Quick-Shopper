define(['models/loginModel', 'hackathon'], function(LoginModel) {
    var LoginsCollection = Hackathon.Collection.extend({
        model: LoginModel,
        backend: "login",
        initialize: function(){
            t("inside initialize [loginsCollection.js]");
        }
    });

    return LoginsCollection;
});
