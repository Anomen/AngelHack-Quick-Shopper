define(['backbone'], function () {
	var Router = Backbone.Router.extend({
		routes:{
			'':'store'
		},
		initialize:function () {
			t("inside initialize [router.js]");
		},
        store: function() {
            t("inside store [router.js]");
            require(['views/storeView'], function (StoreView) {
                if (typeof App.views.shopMapListView === "undefined") {
                    App.views.storeView = new StoreView;
                }
                App.views.storeView.render();
            });
        }
    });
	return Router;
});
