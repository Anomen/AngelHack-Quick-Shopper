define(['hackathon'], function() {
    var EventModel = Hackathon.Model.extend({
        default: {
            eventName        : "",
            eventDescription : "",
            eventAddress     : "",
            eventDate        : new Date(),
            eventURL         : ""
        },
        initialize: function(){
            t("inside initialize [eventModel.js]");
        }
    });

    return EventModel;
});
