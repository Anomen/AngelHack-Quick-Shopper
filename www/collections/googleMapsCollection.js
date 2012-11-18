define(['models/googleMapModel', 'hackathon'], function (GoogleMapModel) {
	var GoogleMapsCollection = Hackathon.Collection.extend({
		model     :GoogleMapModel,
		backend   :"googleMap",
		initialize:function () {
			t("inside initialize [googleMapsCollection.js]");
		}
	});

	return GoogleMapsCollection;
});
