define(['text!templates/eventsTemplate.tpl', 'collections/eventsCollection', 'hackathon'], function(eventsTemplate, EventsCollection) {
    var EventsView = Hackathon.View.extend({
        el: "#page",
        template: _.template(eventsTemplate),
        events: {
        },
        initialize: function() {
            t("inside initialize [eventsView.js]");

            App.collections.eventsCollection = new EventsCollection();
            App.collections.eventsCollection.on('add change remove reset', this.renderEvents, this);
            App.collections.eventsCollection.fetch();

        },
        render: function() {
            t("inside render [eventsView.js]");
			
			$("h1").text("Events");
            this.$el.html(this.template());
        },

        renderEvents: function() {
            t("inside renderEvents [eventsView.js]");
			
            this.$el.html(this.template({
                res: App.collections.eventsCollection.models
            }));
            
            d(App.collections.eventsCollection);
        }

    });
    
    return EventsView;
});
