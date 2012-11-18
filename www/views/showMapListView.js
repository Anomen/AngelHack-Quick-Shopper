define([
	'text!templates/showMapListTemplate.tpl',
	//'collections/showMapCollection',
	'hackathon'
], function (showMapListTemplate) {

	var showMapListView = Hackathon.View.extend({
		el        :"#page",
		template  :_.template(showMapListTemplate),
		events    :{
		},
		initialize:function () {
			t("inside initialize [showMapListView.js]");

			//App.collections.eventsCollection = new EventsCollection();
			//App.collections.eventsCollection.on('add change remove reset', this.renderEvents, this);
			//App.collections.eventsCollection.fetch();

		},
		render    :function () {
			t("inside render [showMapListView.js]");

			$("h1").text("Market Basket");
			this.$el.html(this.template());

			$('#backButton').show();
			$('#backButton').attr('href', '#showMap');
		},

		renderShopMap:function () {
			t("inside renderShopMap [showMapListView.js]");

			/*
			 this.$el.html(this.template({
			 res: App.collections.eventsCollection.models
			 }));

			 d(App.collections.eventsCollection);
			 */
		}

	});

	return showMapView;
});
