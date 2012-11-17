define(['hackathon'], function () {
	var Router = Hackathon.Router.extend({
		routes          :{
			''            :'login',
			'login'       :'login',
			'shoppingList':'showShoppingList',
			'shopMap'     :'shopMap',
			'shopMapList' :'shopMapList'
		},
		initialize      :function () {
			t("inside initialize [router.js]");
		},
		login           :function () {
			require(['views/loginView'], function (LoginView) {
				t("inside #login");

				if (typeof App.views.loginView === "undefined") {
					App.views.loginView = new LoginView;
				}

				App.router.navigate('#login');
				App.views.loginView.render();
			});
		},
		showShoppingList:function () {
			require(['views/shoppingListView'], function (ShoppingListView) {
				t("inside showShoppingList [router.js]");
				if (typeof App.views.shoppingListView === "undefined") {
					App.views.shoppingListView = new ShoppingListView;
				}

				App.router.navigate('#shoppingList');
				App.views.shoppingListView.render();
			});
		},
		shopMap         :function () {
			t("inside shopMap [router.js]");
			require(['views/shopMapView'], function (ShopMapView) {
				if (typeof App.views.shopMapView === "undefined") {
					App.views.shopMapView = new ShopMapView;
				}
				App.views.shopMapView.render();
			});
		},
		shopMapList     :function () {
			t("inside shopMapList [router.js]");
			require(['views/shopMapListView'], function (ShopMapListView) {
				if (typeof App.views.shopMapListView === "undefined") {
					App.views.shopMapListView = new ShopMapListView;
				}
				App.views.shopMapListView.render();
			});
		}
	});
	return Router;
});
