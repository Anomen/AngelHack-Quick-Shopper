define(['hackathon'], function() {
    
    var Router = Hackathon.Router.extend({
        routes: {
            ''              : 'locations' , 
            'locations'     : 'locations' , 
            'badges'        : 'badges'    , 
            'news'          : 'news'      , 
            'events'        : 'events'    ,
            'shopMap'       : 'shopMap'   ,
            'shopMapList'   : 'shopMapList'

        },
        initialize: function(){
            t("inside initialize [router.js]");

            window.mapsFirstLoad = true;
        },
        locations: function() {
            require(['views/locationsView'], function (LocationsView) {
                t("inside initialize #locations");
                if (typeof App.views.locationsView === "undefined")
                    App.views.locationsView = new LocationsView;
                App.views.locationsView.render();
            });
        },
        badges: function() {
            require(['views/badgesView'], function (BadgesView) {
                t("inside initialize #badges");
                if (typeof App.views.badgesView === "undefined")
                    App.views.badgesView = new BadgesView;
                App.views.badgesView.render();
            });
        },
        news: function() {
            require(['views/newsView'], function (NewsView) {
                t("inside initialize #news");
                if (typeof App.views.newsView === "undefined")
                    App.views.newsView = new NewsView;
                App.views.newsView.render();
            });
        },
        events: function() {
            require(['views/eventsView'], function (EventsView) {
                t("inside initialize #events");
                if (typeof App.views.eventsView === "undefined")
                    App.views.eventsView = new EventsView;
                App.views.eventsView.render();
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
