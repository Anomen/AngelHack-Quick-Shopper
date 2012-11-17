define(['models/newsModel', 'hackathon'], function(NewsModel) {
    var NewsCollection = Hackathon.Collection.extend({
        model: NewsModel,
        backend: "news",
        initialize: function(){
            t("inside initialize [newsCollection.js]");
        }
    });

    return NewsCollection;
});
