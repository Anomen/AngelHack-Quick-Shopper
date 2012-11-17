define(['text!templates/loginTemplate.tpl', 'collections/loginsCollection', 'hackathon'], function(loginTemplate, LoginsCollection) {
    
    var LoginView = Hackathon.View.extend({
        
        el: "#page",

        template: _.template(loginTemplate),

        events: {
			"click #login" :"showListView"
        },
        
        initialize: function() {
            t("inside initialize [loginView.js]");
        },

        render: function() {
            t("inside render [loginView.js]");
            
            this.$el.html(this.template());
        },

		showListView: function() {
			t("inside showListView [loginView.js]");

			App.router.showShoppingList();
		}
    });
    
    return LoginView;
});
