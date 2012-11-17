define(['text!templates/usersTemplate.tpl', 'collections/usersCollection', 'hackathon'], function(usersTemplate, UsersCollection) {
    var UsersView = Hackathon.View.extend({
        template: _.template(usersTemplate),
        events: {
        },
        initialize: function(){
            t("inside initialize [usersView.js]");
        }
    });
    
    return UsersView;
});
