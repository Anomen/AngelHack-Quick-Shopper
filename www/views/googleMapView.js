define(['text!templates/googleMapTemplate.tpl',
	'text!templates/tabbarTemplate.tpl',
	'hackathon'],
	function (googleMapTemplate, footerTemplate) {

		var GoogleMapView = Hackathon.View.extend({

			el:"#page",

			template      :_.template(googleMapTemplate),
			footerTemplate:_.template(footerTemplate),

			events:{
				'click .mapOfShops':"goToShopmap",
				'click #backButton':'goBackOnePage'
			},

			initialize:function () {
				t("inside initialize [googleMapView.js]");
			},

			render:function () {
				t("inside render [googleMapView.js]");

				$('h1').text("Shops Map");
				this.$el.html(this.template());

				$('#backButton').show();
				$('#backButton').attr('href', '#shoppingList');

				$('#footer').html(this.footerTemplate());
				
				$('.tabs').hide();
				
				
			},

			goToShopmap:function () {
				App.router.showMap();
			},

			goBackOnePage:function () {
				App.router.showShoppingList();
			}
		});

		return GoogleMapView;
	});
