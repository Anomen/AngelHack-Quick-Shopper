define(['models/userModel', 'hackathon'], function(UserModel) {
    var UsersCollection = Hackathon.Collection.extend({
        model: UserModel,
        backend: "users",
        initialize: function(){
            t("inside initialize [usersCollection.js]");
        }
    });

    return UsersCollection;
});
