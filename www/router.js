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
            t("inside shopMap [router.js]");
            require(['views/shopMapView'], function (ShopMapView) {
                if (typeof App.views.shopMapView === "undefined") {
                    App.views.shopMapView = new ShopMapView;
                }
                App.views.shopMapView.render();
            });
        },
        shopMapList: function() {
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
