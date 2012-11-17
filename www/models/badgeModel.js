define(['hackathon'], function() {
    var BadgeModel = Hackathon.Model.extend({
        default: {
            badgeName     : "",
            minimumEvents : 0
        },
        initialize: function(){
            t("inside initialize [badgeModel.js]");
        }
    });

    return BadgeModel;
});
