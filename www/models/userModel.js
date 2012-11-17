define(['models/badgeModel', 'hackathon'], function(BadgeModel) {
    var UserModel = Hackathon.Model.extend({
        defaults: {
            username       : "",
            firstName      : "",
            lastName       : "",
            eventsAttended : 0,
            badges         : [new BadgeModel({badgeName: 'new_member'})]
        },
        initialize: function(){
            t("inside initialize [userModel.js]");
        }
    });

    return UserModel;
});
