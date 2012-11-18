define(['hackathon'], function () {
	var LoginModel = Hackathon.Model.extend({
		default   :{
			username:"",
			password:""
		},
		initialize:function () {
			t("inside initialize [LoginModel.js]");
		}
	});

	return LoginModel;
});
