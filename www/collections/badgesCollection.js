define(['models/badgeModel', 'hackathon'], function(BadgeModel) {
    var BadgesCollection = Hackathon.Collection.extend({
        model: BadgeModel,
        backend: "badges",
        initialize: function(){
            t("inside initialize [badgesCollection.js]");
        }
    });

    return BadgesCollection;
});
