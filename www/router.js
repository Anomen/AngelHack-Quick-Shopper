define(['hackathon'], function () {

	var Router = Hackathon.Router.extend({

		routes: {
			''               : 'login',
			'login'          : 'login',
			'shoppingList'   :'showShoppingList',
			'showMap'        : 'showMap',
			'showMapList'    : 'showMapList'
		},
		initialize: function () {
			t("inside initialize [router.js]");
		},
		login: function () {
			require(['views/loginView'], function (LoginView) {
				t("inside #login");

				if (typeof App.views.loginView === "undefined") {
					App.views.loginView = new LoginView();
				}

				App.router.navigate('#login');
				App.views.loginView.render();
			});
		},

        showMap: function() {
            t("inside shopMap [router.js]");
            require(['views/showMapView'], function (ShowMapView) {
                if (typeof App.views.showMapView === "undefined") {
                    App.views.showMapView = new ShowMapView();
                }
                App.views.showMapView.render();
            });
        },
        showMapList: function() {
            t("inside showMapList [router.js]");
            require(['views/showMawListView'], function (ShowMapListView) {
                if (typeof App.views.showMapListView === "undefined") {
                    App.views.showMapListView = new ShowMapListView();
                }
                App.views.showMapListView.render();
            });
        },


		showShoppingList:function () {
			require(['views/shoppingListView'], function (ShoppingListView) {
				t("inside showShoppingList [router.js]");
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
