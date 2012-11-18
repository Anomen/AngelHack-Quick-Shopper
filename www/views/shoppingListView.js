define(['text!templates/shoppingListTemplate.tpl',
	'text!templates/tabbarTemplate.tpl',
	'views/tabbarView',
	'hackathon'],
	function (shoppingListTemplate, footerTemplate, FooterView) {

		var ShoppingListView = Hackathon.View.extend({

			el:"#page",

			template      :_.template(shoppingListTemplate),
			footerTemplate:_.template(footerTemplate),

			events:{
			},

			initialize:function () {
				t("inside initialize [shoppingListView.js]");

				App.views.tabbarView = new FooterView();
				App.views.tabbarView.render();
			},

			render:function () {
				t("inside render [shoppingListView.js]");

				var thisInstance = this;

				$('h1').text("Shopping List");

				$('#backButton').show();
				$('#backButton').attr('href', '#');
				$('#logOutButton').show();

				this.$el.html(this.template());

				$('#footer').html(this.footerTemplate());
				$('.tabs #footer_addItem').show();
				$('.tabs #footer_goShopping').show();
				$('.tabs #footer_start').hide();

				$(".tabs #footer_addItem").click(function() {
					thisInstance.showInputBubble();
				});
			},

			showInputBubble:function () {
				t("inside showInputBubble [shoppingListView.js]");

				$('#inputBubble').show();
			}
		});

		return ShoppingListView;
	});
