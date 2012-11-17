define(['hackathon'], function() {
    var NewsModel = Hackathon.Model.extend({
        default: {
            newsTitle  : "",
            newsBody   : "",
            postedBy   : "",
            postedDate : new Date()
        },
        initialize: function(){
            t("inside initialize [newsModel.js]");
        }
    });

    return NewsModel;
});
