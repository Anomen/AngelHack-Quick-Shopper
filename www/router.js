define(['hackathon'], function () {

	var Router = Hackathon.Router.extend({

		routes          :{
			''            :'login',
			'login'       :'login',
			'shoppingList':'showShoppingList',
			'googleMap'   :'showGoogleMap',
			'showMap'     :'showMap',
			'showMapList' :'showMapList'
		},
		initialize      :function () {
			t("inside initialize [router.js]");
		},
		login           :function () {
			require(['views/loginView'], function (LoginView) {
				t("inside #login");

				if (typeof App.views.loginView === "undefined") {
					App.views.loginView = new LoginView();
				}

				App.router.navigate('#login');
				App.views.loginView.render();
			});
		},
		showGoogleMap   :function () {
			t("inside googleMap [router.js]");
			require(['views/googleMapView'], function (GoogleMapView) {
				if (typeof App.views.googleMapView === "undefined") {
					App.views.googleMapView = new GoogleMapView();
				}
				App.router.navigate('#googleMap');
				App.views.googleMapView.render();
			});
		},
		showMap         :function () {
			t("inside shopMap [router.js]");
			require(['views/showMapView'], function (ShowMapView) {
				if (typeof App.views.showMapView === "undefined") {
					App.views.showMapView = new ShowMapView();
				}
				App.router.navigate('#showMap');
				App.views.showMapView.render();
			});
		},
		showMapList     :function () {
			t("inside showMapList [router.js]");
			require(['views/showMapListView'], function (ShowMapListView) {
				if (typeof App.views.showMapListView === "undefined") {
					App.views.showMapListView = new ShowMapListView();
				}
				App.router.navigate('#showMapList');
				App.views.showMapListView.render();
			});
		},
		showShoppingList:function () {
			t("inside showShoppingList [router.js]");

			require(['views/shoppingListView'], function (ShoppingListView) {
				if (typeof App.views.shoppingListView === "undefined") {
					App.views.shoppingListView = new ShoppingListView();
				}
				App.router.navigate('#shoppingList');
				App.views.shoppingListView.render();
			});
		}
	});
	return Router;
});
