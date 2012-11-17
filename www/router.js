define(['hackathon'], function () {
	var Router = Hackathon.Router.extend({
		routes    :{
			''      :'login',
			'login' :'login',
			'badges':'badges',
			'news'  :'news',
			'events':'events'
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
		locations :function () {
			require(['views/locationsView'], function (LocationsView) {
				t("inside initialize #locations");
				if (typeof App.views.locationsView === "undefined")
					App.views.locationsView = new LocationsView;
				App.views.locationsView.render();
			});
		},
		badges    :function () {
			require(['views/badgesView'], function (BadgesView) {
				t("inside initialize #badges");
				if (typeof App.views.badgesView === "undefined")
					App.views.badgesView = new BadgesView;
				App.views.badgesView.render();
			});
		},
		news      :function () {
			require(['views/newsView'], function (NewsView) {
				t("inside initialize #news");
				if (typeof App.views.newsView === "undefined")
					App.views.newsView = new NewsView;
				App.views.newsView.render();
			});
		},
		events    :function () {
			require(['views/eventsView'], function (EventsView) {
				t("inside initialize #events");
				if (typeof App.views.eventsView === "undefined")
					App.views.eventsView = new EventsView;
				App.views.eventsView.render();
			});
		}
	});

	return Router;
});
