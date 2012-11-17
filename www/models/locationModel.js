define(['hackathon'], function() {
    var LocationModel = Hackathon.Model.extend({
        default: {
            locationName        : "",
            locationAddress     : "",
            locationLatitude    : "",
            locationLongitude   : "",
            locationDescription : "",
            resourcesInNeed     : []
        },
        initialize: function(){
            t("inside initialize [locationModel.js]");
        }
    });

    return LocationModel;
});
