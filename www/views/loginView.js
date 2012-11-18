define(['text!templates/loginTemplate.tpl',
	'text!templates/tabbarTemplate.tpl',
	'hackathon'],

	function (loginTemplate, footerTemplate) {

		var LoginView = Hackathon.View.extend({

			el:"#page",

			template:_.template(loginTemplate),
			footerTemplate:_.template(footerTemplate),

			events:{
				"click .button":"showListView"
			},

			initialize: function () {
				t("inside initialize [loginView.js]");
			},

			render: function () {
				t("inside render [loginView.js]");

				$('#logOutButton').hide();
				$('#backButton').hide();
				$('h1').text("Quick Shoppers");

				this.$el.html(this.template());

				$('#footer').html(this.footerTemplate());
				$('#footer').show();
				$('.tabs').hide();
			},

			showListView: function () {
				t("inside showListView [loginView.js]");

				App.router.showShoppingList();
			}
		});

		return LoginView;
	});
