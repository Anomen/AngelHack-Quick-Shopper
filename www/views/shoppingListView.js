define(['text!templates/shoppingListTemplate.tpl', 'collections/shoppingListsCollection', 'hackathon'], function (shoppingListTemplate, shoppingListsCollection) {

	var ShoppingListView = Hackathon.View.extend({

		el:"#page",

		template:_.template(shoppingListTemplate),

		events:{
		},

		initialize:function () {
			t("inside initialize [shoppingListView.js]");


		},

		render:function () {
			t("inside render [shoppingListView.js]");

			$('h1').text("Shopping List");

			this.$el.html(this.template());
		}
	});

	return ShoppingListView;
});
