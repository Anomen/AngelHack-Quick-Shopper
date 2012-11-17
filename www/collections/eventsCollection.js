define(['models/eventModel', 'hackathon'], function(EventModel) {
    var EventCollection = Hackathon.Collection.extend({
        model: EventModel,
        backend: "events",
        initialize: function(){
            t("inside initialize [eventsCollection.js]");
        }
    });

    return EventCollection;
});
