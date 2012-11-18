define([
	'text!templates/showMapTemplate.tpl',
	'text!templates/tabbarTemplate.tpl',
	'hackathon'
], function (showMapTemplate, footerTemplate) {

	var ShowMapView = Hackathon.View.extend({
		el            :"#page",
		template      :_.template(showMapTemplate),
		footerTemplate:_.template(footerTemplate),
		
        events :{
		},
		initialize    :function () {
			t("inside initialize [showMapView.js]");
		},
		render        :function () {
			t("inside render [showMapView.js]");

			$("h1").text("Market Basket");
			this.$el.html(this.template());

			$('#backButton').show();
			$('#backButton').attr('href', '#googleMap');

			$('#footer').html(this.footerTemplate());
			$('.tabs #footer_addItem').hide();
			$('.tabs #footer_goShopping').hide();
			$('.tabs #footer_start').show();

            $('.tabs #footer_start').click(this.hideMap);

            $("svg_small1").show();
            //$("svg").show();


			this.renderMap();
		},

        hideMap: function() {
        },

		renderMap:function () {
			t("inside renderShopMap [showMapView.js]");

            var paper = Raphael(document.getElementById("mapTotal"), 300, 400);
			//var paper = new Raphael(10, 70, 300, 400);
			var rect = paper.rect(0, 0, 300, 320).attr({fill:'fff'});

			var isle1 = paper.rect(0, 40, 130, 2).attr({fill:'fff'});

			var isle2 = paper.rect(170, 40, 130, 2).attr({fill:'fff'});

			var isle3 = paper.rect(0, 80, 130, 2).attr({fill:'fff'});

			var isle4 = paper.rect(170, 80, 130, 2).attr({fill:'fff'});

			var isle5 = paper.rect(0, 120, 130, 2).attr({fill:'fff'});

			var isle6 = paper.rect(170, 120, 130, 2).attr({fill:'fff'});

			var isle7 = paper.rect(0, 160, 130, 2).attr({fill:'fff'});

			var isle8 = paper.rect(170, 160, 130, 2).attr({fill:'fff'});

			var isle9 = paper.rect(0, 200, 130, 2).attr({fill:'fff'});

			var isle10 = paper.rect(170, 200, 130, 2).attr({fill:'fff'});

			var isle11 = paper.rect(0, 240, 130, 2).attr({fill:'fff'});

			var isle12 = paper.rect(170, 240, 130, 2).attr({fill:'fff'});

			var isle13 = paper.rect(0, 280, 130, 2).attr({fill:'fff'});

			var isle14 = paper.rect(170, 280, 130, 2).attr({fill:'fff'});

			var entrance1 = paper.circle(60, 0, 25).attr({fill:'fff'});
			var entrance1Text = paper.text(60, 6, 'Entrance').attr({fill:'#000' });

			var entrance2 = paper.circle(250, 0, 25).attr({fill:'fff'});
			var entrance1Text2 = paper.text(250, 6, 'Entrance').attr({fill:'#000' });


			var start = paper.circle(80, 20, 5).attr({fill:'#3a9a2d'});

			var product1 = paper.circle(70, 78, 5).attr({fill:'#3a9a2d'});

			var product2 = paper.circle(270, 84, 5).attr({fill:'#3a9a2d'});

			var product3 = paper.circle(30, 238, 5).attr({fill:'#3a9a2d'});

			var product4 = paper.circle(280, 278, 5).attr({fill:'#3a9a2d'});


			var bestPathToObject1 = paper.path("M84,20L150,20L150,58L70,58L70,74").attr({stroke:'red', "stroke-width":3 });

			var bestPathToObject2 = paper.path("M72,73L150,73L150,90L268,90").attr({stroke:'red', "stroke-width":3 });

			var bestPathToObject3 = paper.path("M270,88L270,106L150,106L150,217L30,217L30,234").attr({stroke:'red', "stroke-width":3 });

			var bestPathToObject3 = paper.path("M32,232L150,232L150,260L280,260L280,274").attr({stroke:'red', "stroke-width":3 });


			/*
			 var circ = paper.circle(250,250,20).attr({fill:'000'});
			 var moodText = paper.text(250,250,'My\nMood').attr({fill: '#fff' });

			 moods = ['Bad','Not Good','OK','Smiley','Krazy'];
			 colors = [ '#cc0000' , '#a97e22' , '#9f9136' , '#7c9a2d' , '#3a9a2d' ];

			 var myMood = 5;

			 function showMood() {
			 for (i = 0; i < myMood; i++) {
			 (function(i) {
			 console.log('enter loop ' + i);
			 setTimeout(function() {
			 console.log('enter timeout ' + i);
			 inc = i * 40;
			 Ytr = -200 + inc;
			 paper.circle(250,250,20).attr({
			 stroke: 'none',
			 fill:colors[myMood - 1]
			 })
			 .animate({
			 transform:'t0,' + Ytr
			 },2000,'bounce').toBack();
			 },50*i);
			 })(i);
			 }

			 paper.text(250,300,moods[myMood - 1]).attr({
			 fill:colors[myMood - 1]
			 });
			 }
			 moodText.node.onclick = showMood;
			 circ.node.onclick = showMood;
			 */
			/*
			 this.$el.html(this.template({
			 res: App.collections.eventsCollection.models
			 }));

			 d(App.collections.eventsCollection);
			 */
		}

	});

	return ShowMapView;
});
