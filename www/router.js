define(['hackathon'], function () {

	var Router = Hackathon.Router.extend({
		routes: {
			''               : 'showMap',
			'login'          : 'login',
			'showMap'        : 'showMap',
			'showMapList'    : 'showMapList'
		},
		initialize:function () {
			t("inside initialize [router.js]");

			window.mapsFirstLoad = true;

            
		},
		login : function () {
			require(['views/loginView'], function (LoginView) {
				t("inside #login");
				if (typeof App.views.loginView === "undefined") {
					App.views.loginView = new LoginView();
				}
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
        }


    });
	return Router;
});
