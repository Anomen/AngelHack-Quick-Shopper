define(['text!templates/tabbarTemplate.tpl', 'hackathon'], function (tabbarTemplate) {
	var TabbarView = Hackathon.View.extend({
		el        :"#footer",
		template  :_.template(tabbarTemplate),
		initialize:function () {
			t("inside initialize [tabbarView.js]");
		},
		render    :function () {
			this.$el.html(this.template());
			return this;
		}
	});

	return TabbarView;
});
