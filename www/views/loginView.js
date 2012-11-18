define(['text!templates/loginTemplate.tpl',
	'hackathon'],

	function (loginTemplate) {

		var LoginView = Hackathon.View.extend({

			el:"#page",

			template:_.template(loginTemplate),

			events:{
				"click .button":"showListView"
			},

			initialize:function () {
				t("inside initialize [loginView.js]");
			},

			render:function () {
				t("inside render [loginView.js]");

				$('#logOutButton').hide();
				$('h1').text("Login");

				this.$el.html(this.template());
			},

			showListView:function () {
				t("inside showListView [loginView.js]");

				$('#logOutButton').show();

				App.router.showShoppingList();
			}
		});

		return LoginView;
	});
