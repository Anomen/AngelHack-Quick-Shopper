define(['text!templates/googleMapTemplate.tpl',
	'text!templates/tabbarTemplate.tpl',
	'hackathon'],
	function (googleMapTemplate, footerTemplate) {

		var GoogleMapView = Hackathon.View.extend({

			el:"#page",

			template      :_.template(googleMapTemplate),
			footerTemplate:_.template(footerTemplate),

			events:{
				'click .mapOfShops':"goToShopmap"
			},

			initialize:function () {
				t("inside initialize [googleMapView.js]");
			},

			render:function () {
				t("inside render [googleMapView.js]");

				$('h1').text("Shops Map");
				this.$el.html(this.template());

				$('#backButton').show();

				$('#footer').html(this.footerTemplate());
				$('.tabs #footer_addItem').hide();
				$('.tabs #footer_goShopping').hide();
				$('.tabs #footer_start').hide();
			},

			goToShopmap:function () {
				App.router.showMap();
			}
		});

		return GoogleMapView;
	});
