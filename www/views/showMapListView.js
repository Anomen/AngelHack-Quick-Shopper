define([

    'text!templates/showMapListTemplate.tpl',
    'text!templates/shoppingListTemplate.tpl',
    //'collections/showMapCollection',
    'hackathon'
], function(showMapListTemplate, shoppingListTemplate) {
    
    var showMapListView = Hackathon.View.extend({
        el: "#page",
        template: _.template(showMapListTemplate),
        toDoListTemplate: _.template(shoppingListTemplate),
        events: {
        },
        initialize: function() {
            t("inside initialize [showMapListView.js]");


            //$("svg").hide();

            

            

        },
        render: function() {
            t("inside render [showMapListView.js]");
			
			$("h1").text("Market Basket");
            this.$el.html(this.template());
            
            $('#backButton').show();
            $('#backButton').attr('href', '#showMap');

            $(".tabs").hide();
            $("#footer").hide();


            this.renderMapObject1();


            this.manageToDoList();

            
            

            //
            //this.renderMapObject3();
            //this.renderMapObject4();
        },

        manageToDoList: function() {
            t("inside manageToDoList [showMapListView.js]");

            var thisInstance = this;

            $("#item1InList").click(function() {

                $("#mapObject1").hide();
                $("#mapObject2").hide();
                $("#mapObject3").hide();
                $("#mapObject4").hide();


                if($("#check-1").is(':checked')) {
                    thisInstance.renderMapObject2();
                } else {
                    
                    $("#mapObject1").html("");
                    $("#mapObject2").html("");
                    $("#mapObject3").html("");
                    $("#mapObject4").html("");
                    thisInstance.renderMapObject1();
                }
            });

            $("#item2InList").click(function() {

                $("#mapObject1").hide();
                $("#mapObject2").hide();
                $("#mapObject3").hide();
                $("#mapObject4").hide();


                if($("#check-2").is(':checked')) {
                    thisInstance.renderMapObject3();
                } else {
                    $("#mapObject1").html("");
                    $("#mapObject2").html("");
                    $("#mapObject3").html("");
                    $("#mapObject4").html("");
                    thisInstance.renderMapObject2();
                }
            });

            $("#item3InList").click(function() {

                $("#mapObject1").hide();
                $("#mapObject2").hide();
                $("#mapObject3").hide();
                $("#mapObject4").hide();


                if($("#check-3").is(':checked')) {
                    thisInstance.renderMapObject4();
                } else {
                    $("#mapObject1").html("");
                    $("#mapObject2").html("");
                    $("#mapObject3").html("");
                    $("#mapObject4").html("");
                    thisInstance.renderMapObject3();
                }
            });


        },

        renderMapObject1: function() {
            t("inside renderMapObject1 [showMapListView.js]");
			
            
            $("#mapObject1").show();
            $("#mapObject2").hide();
            $("#mapObject3").hide();
            $("#mapObject4").hide();

            var paperObject1 = Raphael(document.getElementById("mapObject1"), 300, 180);
            //var paperObject1 = new Raphael(10, 70, 300, 400);
            var rect = paperObject1.rect(0, 0, 300, 320).attr({fill:'fff'});


            var isle1 = paperObject1.rect(0, 40, 130, 2).attr({fill:'fff'});

            var isle2 = paperObject1.rect(170, 40, 130, 2).attr({fill:'fff'});

            var isle3 = paperObject1.rect(0, 80, 130, 2).attr({fill:'fff'});

            var isle4 = paperObject1.rect(170, 80, 130, 2).attr({fill:'fff'});


            var isle5 = paperObject1.rect(0, 120, 130, 2).attr({fill:'fff'});

            var isle6 = paperObject1.rect(170, 120, 130, 2).attr({fill:'fff'});

            var isle7 = paperObject1.rect(0, 160, 130, 2).attr({fill:'fff'});

            var isle8 = paperObject1.rect(170, 160, 130, 2).attr({fill:'fff'});
/*
            var isle9 = paperObject1.rect(0, 200, 130, 2).attr({fill:'fff'});

            var isle10 = paperObject1.rect(170, 200, 130, 2).attr({fill:'fff'});

            var isle11 = paperObject1.rect(0, 240, 130, 2).attr({fill:'fff'});

            var isle12 = paperObject1.rect(170, 240, 130, 2).attr({fill:'fff'});

            var isle13 = paperObject1.rect(0, 280, 130, 2).attr({fill:'fff'});

            var isle14 = paperObject1.rect(170, 280, 130, 2).attr({fill:'fff'});
*/

            paperObject1.circle(15, 60, 9).attr({stroke:'blue'});
            var textIsle1 = paperObject1.text(15, 60, '1').attr({fill:'blue', 'font-size': 12 });

            paperObject1.circle(15, 100, 9).attr({stroke:'blue'});
            var textIsle1 = paperObject1.text(15, 100, '2').attr({fill:'blue', 'font-size': 12 });

            paperObject1.circle(15, 140, 9).attr({stroke:'blue'});
            var textIsle1 = paperObject1.text(15, 140, '3').attr({fill:'blue', 'font-size': 12 });

            paperObject1.circle(285, 60, 9).attr({stroke:'blue'});
            var textIsle1 = paperObject1.text(285, 60, '7').attr({fill:'blue', 'font-size': 12 });

            paperObject1.circle(285, 100, 9).attr({stroke:'blue'});
            var textIsle1 = paperObject1.text(285, 100, '8').attr({fill:'blue', 'font-size': 12 });

            paperObject1.circle(285, 140, 9).attr({stroke:'blue'});
            var textIsle1 = paperObject1.text(285, 140, '9').attr({fill:'blue', 'font-size': 12 });





            var entrance1 = paperObject1.circle(60, 0, 25).attr({fill:'fff'});
            var entrance1Text = paperObject1.text(60, 6, 'Entrance').attr({fill:'#000' });

            var entrance2 = paperObject1.circle(250, 0, 25).attr({fill:'fff'});
            var entrance1Text2 = paperObject1.text(250, 6, 'Entrance').attr({fill:'#000' });


            var start = paperObject1.circle(80, 20, 5).attr({fill:'#3a9a2d'});

            var product1 = paperObject1.circle(70, 78, 5).attr({fill:'#3a9a2d'});


            var product2 = paperObject1.circle(270, 84, 5).attr({fill:'#fff'});
/*
            var product3 = paperObject1.circle(30, 238, 5).attr({fill:'#3a9a2d'});

            var product4 = paperObject1.circle(280, 278, 5).attr({fill:'#3a9a2d'});
*/

            var bestPathToObject1 = paperObject1.path("M84,20L150,20L150,58L70,58L70,74").attr({stroke:'red', "stroke-width":3 });
        

            var bestPathToObject2 = paperObject1.path("M72,73L150,73L150,90L268,90").attr({stroke:'black', "stroke-width": 2 });

            var bestPathToObject3 = paperObject1.path("M270,88L270,106L150,106L150,217L30,217L30,234").attr({stroke:'black', "stroke-width": 2 });
/*
            var bestPathToObject3 = paperObject1.path("M32,232L150,232L150,260L280,260L280,274").attr({stroke:'red', "stroke-width":3 });
*/

            /*
             var circ = paperObject1.circle(250,250,20).attr({fill:'000'});
             var moodText = paperObject1.text(250,250,'My\nMood').attr({fill: '#fff' });

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
             paperObject1.circle(250,250,20).attr({
             stroke: 'none',
             fill:colors[myMood - 1]
             })
             .animate({
             transform:'t0,' + Ytr
             },2000,'bounce').toBack();
             },50*i);
             })(i);
             }

             paperObject1.text(250,300,moods[myMood - 1]).attr({
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
        }, 



        animatePath: function() {

//                if (section < strokes.length) {
  //                  drawnPath += strokes[section].stroke;
                    bestPathToObject1.animate({
                        path: drawnPath
                    }, strokes[section].time, animatePath);
                    //section++;
            //    }
        },

        renderMapObject2: function() {
            t("inside renderMapObject2 [showMapListView.js]");
            
            $("#mapObject1").hide();
            $("#mapObject2").show();
            $("#mapObject3").hide();
            $("#mapObject4").hide();

            var paperObject2 = Raphael(document.getElementById("mapObject2"), 300, 180);
            //var paperObject1 = new Raphael(10, 70, 300, 400);
            var rect = paperObject2.rect(0, 0, 300, 320).attr({fill:'fff'});

            var isle1 = paperObject2.rect(0, 40, 130, 2).attr({fill:'fff'});

            var isle2 = paperObject2.rect(170, 40, 130, 2).attr({fill:'fff'});

            var isle3 = paperObject2.rect(0, 80, 130, 2).attr({fill:'fff'});

            var isle4 = paperObject2.rect(170, 80, 130, 2).attr({fill:'fff'});

            var isle5 = paperObject2.rect(0, 120, 130, 2).attr({fill:'fff'});

            var isle6 = paperObject2.rect(170, 120, 130, 2).attr({fill:'fff'});

            var isle7 = paperObject2.rect(0, 160, 130, 2).attr({fill:'fff'});

            var isle8 = paperObject2.rect(170, 160, 130, 2).attr({fill:'fff'});

            var entrance1 = paperObject2.circle(60, 0, 25).attr({fill:'fff'});
            var entrance1Text = paperObject2.text(60, 6, 'Entrance').attr({fill:'#000' });

            var entrance2 = paperObject2.circle(250, 0, 25).attr({fill:'fff'});
            var entrance1Text2 = paperObject2.text(250, 6, 'Entrance').attr({fill:'#000' });


            paperObject2.circle(15, 60, 9).attr({stroke:'blue'});
            var textIsle1 = paperObject2.text(15, 60, '1').attr({fill:'blue', 'font-size': 12 });

            paperObject2.circle(15, 100, 9).attr({stroke:'blue'});
            var textIsle1 = paperObject2.text(15, 100, '2').attr({fill:'blue', 'font-size': 12 });

            paperObject2.circle(15, 140, 9).attr({stroke:'blue'});
            var textIsle1 = paperObject2.text(15, 140, '3').attr({fill:'blue', 'font-size': 12 });

            paperObject2.circle(285, 60, 9).attr({stroke:'blue'});
            var textIsle1 = paperObject2.text(285, 60, '7').attr({fill:'blue', 'font-size': 12 });

            paperObject2.circle(285, 100, 9).attr({stroke:'blue'});
            var textIsle1 = paperObject2.text(285, 100, '8').attr({fill:'blue', 'font-size': 12 });

            paperObject2.circle(285, 140, 9).attr({stroke:'blue'});
            var textIsle1 = paperObject2.text(285, 140, '9').attr({fill:'blue', 'font-size': 12 });




            var start = paperObject2.circle(80, 20, 5).attr({fill:'#fff'});

            var product1 = paperObject2.circle(70, 78, 5).attr({fill:'#3a9a2d'});

            var product2 = paperObject2.circle(270, 84, 5).attr({fill:'#3a9a2d'});

            
            var bestPathToObject1 = paperObject2.path("M84,20L150,20L150,58L70,58L70,74").attr({stroke:'black', "stroke-width": 2 });

            var bestPathToObject2 = paperObject2.path("M72,73L150,73L150,90L268,90").attr({stroke:'red', "stroke-width": 3 });

            var bestPathToObject3 = paperObject2.path("M270,88L270,106L150,106L150,217L30,217L30,234").attr({stroke:'black', "stroke-width": 2 });


        }, 

        renderMapObject3: function() {
            t("inside renderMapObject3 [showMapListView.js]");
            
            $("#mapObject1").hide();
            $("#mapObject2").hide();
            $("#mapObject3").show();
            $("#mapObject4").hide();

            var paperObject3 = Raphael(document.getElementById("mapObject3"), 300, 180);
            
            var rect = paperObject3.rect(0, 0, 300, 320).attr({fill:'fff'});

            var isle3 = paperObject3.rect(0, 10, 130, 2).attr({fill:'fff'}); //-70

            var isle4 = paperObject3.rect(170, 10, 130, 2).attr({fill:'fff'});

            var isle5 = paperObject3.rect(0, 50, 130, 2).attr({fill:'fff'});

            var isle6 = paperObject3.rect(170, 50, 130, 2).attr({fill:'fff'});

            var isle7 = paperObject3.rect(0, 90, 130, 2).attr({fill:'fff'});

            var isle8 = paperObject3.rect(170, 90, 130, 2).attr({fill:'fff'});

            var isle9 = paperObject3.rect(0, 130, 130, 2).attr({fill:'fff'});

            var isle10 = paperObject3.rect(170, 130, 130, 2).attr({fill:'fff'});

            var isle11 = paperObject3.rect(0, 170, 130, 2).attr({fill:'fff'});

            var isle12 = paperObject3.rect(170, 170, 130, 2).attr({fill:'fff'});


            paperObject3.circle(15, 30, 9).attr({stroke:'blue'});
            var textIsle1 = paperObject3.text(15, 30, '2').attr({fill:'blue', 'font-size': 12 });

            paperObject3.circle(15, 70, 9).attr({stroke:'blue'});
            var textIsle1 = paperObject3.text(15, 70, '3').attr({fill:'blue', 'font-size': 12 });

            paperObject3.circle(15, 110, 9).attr({stroke:'blue'});
            var textIsle1 = paperObject3.text(15, 110, '4').attr({fill:'blue', 'font-size': 12 });

            paperObject3.circle(15, 150, 9).attr({stroke:'blue'});
            var textIsle1 = paperObject3.text(15, 150, '5').attr({fill:'blue', 'font-size': 12 });



            paperObject3.circle(285, 30, 9).attr({stroke:'blue'});
            var textIsle1 = paperObject3.text(285, 30, '8').attr({fill:'blue', 'font-size': 12 });

            paperObject3.circle(285, 70, 9).attr({stroke:'blue'});
            var textIsle1 = paperObject3.text(285, 70, '9').attr({fill:'blue', 'font-size': 12 });

            paperObject3.circle(285, 110, 9).attr({stroke:'blue'});
            var textIsle1 = paperObject3.text(285, 110, '10').attr({fill:'blue', 'font-size': 12 });

            paperObject3.circle(285, 150, 9).attr({stroke:'blue'});
            var textIsle1 = paperObject3.text(285, 150, '11').attr({fill:'blue', 'font-size': 12 });


            var product1 = paperObject3.circle(70, 8, 5).attr({fill:'#fff'});

            var product2 = paperObject3.circle(270, 14, 5).attr({fill:'#3a9a2d'});

            var product3 = paperObject3.circle(30, 168, 5).attr({fill:'#3a9a2d'});

            var bestPathToObject2 = paperObject3.path("M72,3L150,3L150,20L268,20").attr({stroke:'black', "stroke-width": 2 });

            var bestPathToObject3 = paperObject3.path("M270,18L270,36L150,36L150,147L30,147L30,164").attr({stroke:'red', "stroke-width": 3 });

            var bestPathToObject4 = paperObject3.path("M32,164L150,164L150,260L280,260L280,274").attr({stroke:'black', "stroke-width": 2 });

        },

        renderMapObject4: function() {
            t("inside renderMapObject4 [showMapListView.js]");
            
            $("#mapObject1").hide();
            $("#mapObject2").hide();
            $("#mapObject3").hide();
            $("#mapObject4").show();
            
            var paperObject4 = Raphael(document.getElementById("mapObject4"), 300, 180);
            //var paperObject4 = new Raphael(10, 70, 300, 400);
            var rect = paperObject4.rect(0, 0, 300, 320).attr({fill:'fff'});
/*
            var isle1 = paperObject4.rect(0, 40, 130, 2).attr({fill:'fff'});

            var isle2 = paperObject4.rect(170, 40, 130, 2).attr({fill:'fff'});

            var isle3 = paperObject4.rect(0, 80, 130, 2).attr({fill:'fff'});

            var isle4 = paperObject4.rect(170, 80, 130, 2).attr({fill:'fff'});

/*
            var isle5 = paperObject4.rect(0, 120, 130, 2).attr({fill:'fff'});

            var isle6 = paperObject4.rect(170, 120, 130, 2).attr({fill:'fff'});
*/
            var isle7 = paperObject4.rect(0, 30, 130, 2).attr({fill:'fff'});

            var isle8 = paperObject4.rect(170, 30, 130, 2).attr({fill:'fff'});

            var isle9 = paperObject4.rect(0, 70, 130, 2).attr({fill:'fff'});

            var isle10 = paperObject4.rect(170, 70, 130, 2).attr({fill:'fff'});

            var isle11 = paperObject4.rect(0, 110, 130, 2).attr({fill:'fff'});

            var isle12 = paperObject4.rect(170, 110, 130, 2).attr({fill:'fff'}); //-210

            var isle13 = paperObject4.rect(0, 150, 130, 2).attr({fill:'fff'});

            var isle14 = paperObject4.rect(170, 150, 130, 2).attr({fill:'fff'});
/*
            var entrance1 = paperObject4.circle(60, 0, 25).attr({fill:'fff'});
            var entrance1Text = paperObject4.text(60, 6, 'Entrance').attr({fill:'#000' });

            var entrance2 = paperObject4.circle(250, 0, 25).attr({fill:'fff'});
            var entrance1Text2 = paperObject4.text(250, 6, 'Entrance').attr({fill:'#000' });


            var start = paperObject4.circle(80, 20, 5).attr({fill:'#3a9a2d'});

            var product1 = paperObject4.circle(70, 78, 5).attr({fill:'#3a9a2d'});


            var product2 = paperObject4.circle(270, 84, 5).attr({fill:'#3a9a2d'});
*/
            var product3 = paperObject4.circle(30, 108, 5).attr({fill:'#3a9a2d'});

            var product4 = paperObject4.circle(280, 148, 5).attr({fill:'#3a9a2d'});



            paperObject4.circle(15, 50, 9).attr({stroke:'blue'});
            var textIsle1 = paperObject4.text(15, 50, '4').attr({fill:'blue', 'font-size': 12 });

            paperObject4.circle(15, 90, 9).attr({stroke:'blue'});
            var textIsle1 = paperObject4.text(15, 90, '5').attr({fill:'blue', 'font-size': 12 });

            paperObject4.circle(15, 130, 9).attr({stroke:'blue'});
            var textIsle1 = paperObject4.text(15, 130, '6').attr({fill:'blue', 'font-size': 12 });



            paperObject4.circle(285, 50, 9).attr({stroke:'blue'});
            var textIsle1 = paperObject4.text(285, 50, '10').attr({fill:'blue', 'font-size': 12 });

            paperObject4.circle(285, 90, 9).attr({stroke:'blue'});
            var textIsle1 = paperObject4.text(285, 90, '11').attr({fill:'blue', 'font-size': 12 });

            paperObject4.circle(285, 130, 9).attr({stroke:'blue'});
            var textIsle1 = paperObject4.text(285, 130, '12').attr({fill:'blue', 'font-size': 12 });




/*
            var bestPathToObject1 = paperObject4.path("M84,20L150,20L150,58L70,58L70,74").attr({stroke:'red', "stroke-width":3 });

            var bestPathToObject2 = paperObject4.path("M72,73L150,73L150,90L268,90").attr({stroke:'red', "stroke-width":3 });
*/
            
            var bestPathToObject3 = paperObject4.path("M150,0L150,87L30,87L30,104").attr({stroke:'black', "stroke-width": 2 });

            var bestPathToObject4 = paperObject4.path("M32,102L150,102L150,130L280,130L280,144").attr({stroke:'red', "stroke-width":3 });


            /*
             var circ = paperObject4.circle(250,250,20).attr({fill:'000'});
             var moodText = paperObject4.text(250,250,'My\nMood').attr({fill: '#fff' });

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
             paperObject4.circle(250,250,20).attr({
             stroke: 'none',
             fill:colors[myMood - 1]
             })
             .animate({
             transform:'t0,' + Ytr
             },2000,'bounce').toBack();
             },50*i);
             })(i);
             }

             paperObject4.text(250,300,moods[myMood - 1]).attr({
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
    
    return showMapListView;

});
