define(['models/locationModel', 'hackathon'], function(LocationModel) {
    var LocationsCollection = Hackathon.Collection.extend({
        model: LocationModel,
        backend: "locations",
        initialize: function(){
            t("inside initialize [locationsCollection.js]");
        }
    });

    return LocationsCollection;
});
