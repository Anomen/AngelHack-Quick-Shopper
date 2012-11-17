define(['hackathon'], function () {
	var ShoppingListModel = Hackathon.Model.extend({
		default   :{
			itemName:"",
			quantity:""
		},
		initialize:function () {
			t("inside initialize [ShoppingListModel.js]");
		}
	});

	return ShoppingListModel;
});
