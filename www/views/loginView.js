define(['text!templates/loginTemplate.tpl',
	'text!templates/tabbarTemplate.tpl',
	'views/tabbarView',
	'hackathon'],

	function (loginTemplate, footerTemplate, FooterView) {

		var LoginView = Hackathon.View.extend({

			el:"#page",

			template      :_.template(loginTemplate),
			footerTemplate:_.template(footerTemplate),

			events:{
				"click #login":"showListView"
			},

			initialize:function () {
				t("inside initialize [loginView.js]");

				App.views.tabbarView = new FooterView();
				App.views.tabbarView.render();
			},

			render:function () {
				t("inside render [loginView.js]");

				$('h1').text("Login");

				this.$el.html(this.template());

				$('#footer').html(this.footerTemplate());
				$('.tabs #footer_goShopping').hide();
				$('.tabs #footer_start').hide();
			},

			showListView:function () {
				t("inside showListView [loginView.js]");

				$('#logOutButton').show();

				App.router.showShoppingList();
			}
		});

		return LoginView;
	});
