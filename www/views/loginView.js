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
				$('h1').text("Easy Shopping");

				this.$el.html(this.template());

				$('#footer').html(this.footerTemplate());
				$('.tabs').hide();
			},

			showListView: function () {
				t("inside showListView [loginView.js]");

				$('#logOutButton').show();

				App.router.showShoppingList();
			}
		});

		return LoginView;
	});
