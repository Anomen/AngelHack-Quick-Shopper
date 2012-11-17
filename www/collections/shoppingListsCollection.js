define(['models/shoppingListModel', 'hackathon'], function (ShoppingListModel) {
	var ShoppingListsCollection = Hackathon.Collection.extend({
		model     :ShoppingListModel,
		backend   :"shoppingList",
		initialize:function () {
			t("inside initialize [shoppingListsCollection.js]");
		}
	});

	return ShoppingListsCollection;
});
