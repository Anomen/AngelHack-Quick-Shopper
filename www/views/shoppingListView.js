define(['text!templates/shoppingListTemplate.tpl',
	'text!templates/tabbarTemplate.tpl',
	'collections/shoppingListsCollection',
	'hackathon'],
	function (shoppingListTemplate, footerTemplate, shoppingListsCollection) {

		var ShoppingListView = Hackathon.View.extend({

			el:"#page",

			template      :_.template(shoppingListTemplate),
			footerTemplate:_.template(footerTemplate),

			events:{
			},

			initialize:function () {
				t("inside initialize [shoppingListView.js]");
			},

			render:function () {
				t("inside render [shoppingListView.js]");

				$('h1').text("Shopping List");

				this.$el.html(this.template());

				$('#footer').html(this.footerTemplate());
				$('.tabs #footer_goShopping').show();
				$('.tabs #footer_start').hide();
			}
		});

		return ShoppingListView;
	});
