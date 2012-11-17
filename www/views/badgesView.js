define(['text!templates/badgesTemplate.tpl', 'collections/badgesCollection', 'models/userModel', 'hackathon'], function(badgesTemplate, BadgesCollection, UserModel) {
    var BadgesView = Hackathon.View.extend({
        el: "#page",
        template: _.template(badgesTemplate),
        initialize: function(){
            t("inside initialize [badgesView.js]");

            if (!App.collections.badgesCollection)
                App.collections.badgesCollection = new BadgesCollection;
            App.collections.badgesCollection.fetch();

            // We assume the user is authenticated
            //this.currentUser = App.collections.usersCollection.get(0);
            this.currentUser = new UserModel;

            // the user needs to be authenticated
            $("#scanbut").show();
            $("#scanbut").on("touchstart", this.connect);

            // Bind all function so that 'this' refers to the current instance at any time.
            _.bindAll(this);
        },
        connect: function(){
            t("inside BadgesView.connect()");

            var self = this;

            window.plugins.barcodeScanner.scan( function(result) {
                //var JSON = {};
                //eval("JSON = " + result.text);
                //var JSON = {eventName: "event3"};

                // User needs to be authenticated
                self.currentUser.set('eventsAttended', self.currentUser.get('eventsAttended')+1);

                // Calculate if the user wan a badge
                App.collections.badgesCollection.each(function(badgeModel){
                    if (badgeModel.get('minimumEvents') > self.currentUser.get('eventsAttended')) 
                        return;

                    // the user has already won such badge?
                    if (self.currentUser.get('badges').length > 0 && 
                            _.find(self.currentUser.get('badges'), function(badgeModelUser) {
                                return badgeModelUser.get('badgeName') === badgeModel.get('badgeName');
                            }))
                        return;
                        
                    // The user won a badge !
                    self.currentUser.get('badges').push(badgeModel);
                    self.render(); // durty
                    console.log(self.currentUser);
                });
            }, function(error) {
                alert("error");
            });
            
            return false;
        },
        render: function(){
            t("inside render()");
            $("#header h1").html("My Badges");
            console.log(this.currentUser.toJSON());
            this.$el.html(this.template(this.currentUser.toJSON()));
        }
    });
    
    return BadgesView;
});
