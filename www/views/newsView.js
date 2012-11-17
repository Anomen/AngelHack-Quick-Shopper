define(['text!templates/newsTemplate.tpl', 'collections/newsCollection', 'hackathon'], function(newsTemplate, NewsCollection) {
    var NewsView = Hackathon.View.extend({
        el: "#page",
        template: _.template(newsTemplate),
        events: {
        },
        initialize: function(){
            t("inside initialize [newsView.js]");

            App.collections.newsCollection = new NewsCollection();
            App.collections.newsCollection.on('add change remove reset', this.renderNews, this);
            App.collections.newsCollection.fetch();
        },
        render: function() {
            t("inside render [newsView.js]");
			
			$("h1").text("News");
            this.$el.html(this.template());
        },

        renderNews: function() {
            t("inside renderNews [newsView.js]");
			
			this.$el.html(this.template({
				res: App.collections.newsCollection.models
			}));

            d(App.collections.newsCollection);

        }
    });
    
    return NewsView;
});
