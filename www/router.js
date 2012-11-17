define(['hackathon'], function () {
	var Router = Hackathon.Router.extend({
		routes    :{
			''      :'login',
			'login' :'login',
			'shopMap'       : 'shopMap'   ,
			'shopMapList'   : 'shopMapList'
		},
		initialize:function () {
			t("inside initialize [router.js]");

			window.mapsFirstLoad = true;
		},
		login     :function () {
			require(['views/loginView'], function (LoginView) {
				t("inside #login");
				if (typeof App.views.loginView === "undefined") {
					App.views.loginView = new LoginView;
				}
				App.views.loginView.render();
			});
		},
        shopMap: function() {
            require(['views/shopMapView'], function (EventsView) {
                t("inside shopMap [router.js]");
                if (typeof App.views.eventsView === "undefined") {
                    App.views.shopMapView = new ShopMapView;
                }
                App.views.shopMapView.render();
            });
        },
        shopMapList: function() {
            require(['views/shopMapListView'], function (EventsView) {
                t("inside shopMapList [router.js]");
                if (typeof App.views.eventsView === "undefined") {
                    App.views.shopMapListView = new ShopMapListView;
                }
                App.views.shopMapListView.render();
            });
        }


    });
	return Router;
});
