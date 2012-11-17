define(['text!templates/locationsTemplate.tpl', 'collections/locationsCollection', 'hackathon'], function(locationsTemplate, LocationsCollection) {
    
    /* An InfoBox is like an info window, but it displays
             * under the marker, opens quicker, and has flexible styling.
             * @param {GLatLng} latlng Point to place bar at
             * @param {Map} map The map on which to display this InfoBox.
             * @param {Object} opts Passes configuration options - content,
             *   offsetVertical, offsetHorizontal, className, height, width
             */
            function InfoBox(opts) {
              google.maps.OverlayView.call(this);
              this.latlng_ = opts.latlng;
              this.map_ = opts.map;
              this.offsetVertical_ = -205;
              this.offsetHorizontal_ = 0;
              this.height_ = 165;
              this.width_ = 266;

              var lat = this.latlng_.Xa;
              var lng = this.latlng_.Ya;
              var uniqueKey = lat + ';' + lng;


              this.htmlContent = window.locationDetails[uniqueKey];
              if(this.htmlContent.toString() === "undefined") {
                this.htmlContent = "No description";
              }

              var me = this;
              this.boundsChangedListener_ =
                google.maps.event.addListener(this.map_, "bounds_changed", function() {
                  return me.panMap.apply(me);
                });

              // Once the properties of this OverlayView are initialized, set its map so
              // that we can display it.  This will trigger calls to panes_changed and
              // draw.
              this.setMap(this.map_);
            }

            /* InfoBox extends GOverlay class from the Google Maps API
             */
            InfoBox.prototype = new google.maps.OverlayView();

            /* Creates the DIV representing this InfoBox
             */
            InfoBox.prototype.remove = function() {
              if (this.div_) {
                this.div_.parentNode.removeChild(this.div_);
                this.div_ = null;
              }
            };

            /* Redraw the Bar based on the current projection and zoom level
             */
            InfoBox.prototype.draw = function() {
              // Creates the element if it doesn't exist already.
              this.createElement();
              if (!this.div_) return;

              // Calculate the DIV coordinates of two opposite corners of our bounds to
              // get the size and position of our Bar
              var pixPosition = this.getProjection().fromLatLngToDivPixel(this.latlng_);
              if (!pixPosition) return;

              // Now position our DIV based on the DIV coordinates of our bounds
              this.div_.style.width = this.width_ + "px";
              this.div_.style.left = (pixPosition.x + this.offsetHorizontal_) + "px";
              this.div_.style.height = this.height_ + "px";
              this.div_.style.top = (pixPosition.y + this.offsetVertical_) + "px";
              this.div_.style.display = 'block';
            };

            /* Creates the DIV representing this InfoBox in the floatPane.  If the panes
             * object, retrieved by calling getPanes, is null, remove the element from the
             * DOM.  If the div exists, but its parent is not the floatPane, move the div
             * to the new pane.
             * Called from within draw.  Alternatively, this can be called specifically on
             * a panes_changed event.
             */
            InfoBox.prototype.createElement = function() {
              var panes = this.getPanes();
              var div = this.div_;
              if (!div) {
                // This does not handle changing panes.  You can set the map to be null and
                // then reset the map to move the div.
                div = this.div_ = document.createElement("div");
                div.style.border = "0px none";
                div.style.position = "absolute";
                div.style.background = "url('http://dl.dropbox.com/u/6984734/blueinfowindow.png') no-repeat";
                //div.style.background-repeat = "no-repeat";
                //div.style.background-opacity = "0.5";
                //div.style.opacity = "0.5";
                div.style.width = this.width_ + "px";
                div.style.height = this.height_ + "px";
                var contentDiv = document.createElement("div");
                contentDiv.style.padding = "0px 32px 32px 34px";
                //contentDiv.style.padding-top = "10px";


                contentDiv.innerHTML = this.htmlContent; //"<b>Hello World!</b>";

                var topDiv = document.createElement("div");
                topDiv.style.textAlign = "right";
                var closeImg = document.createElement("img");
                closeImg.style.width = "32px";
                closeImg.style.height = "32px";
                closeImg.style.cursor = "pointer";
                
                closeImg.src = "http://dl.dropbox.com/u/6984734/closebtn.png";
                topDiv.appendChild(closeImg);

                function removeInfoBox(ib) {
                  return function() {
                    ib.setMap(null);
                  };
                }

                google.maps.event.addDomListener(closeImg, 'click', removeInfoBox(this));

                div.appendChild(topDiv);
                div.appendChild(contentDiv);
                div.style.display = 'none';
                panes.floatPane.appendChild(div);
                this.panMap();
              } else if (div.parentNode != panes.floatPane) {
                // The panes have changed.  Move the div.
                div.parentNode.removeChild(div);
                panes.floatPane.appendChild(div);
              } else {
                // The panes have not changed, so no need to create or move the div.
              }
            }

            /* Pan the map to fit the InfoBox.
             */
            InfoBox.prototype.panMap = function() {
              // if we go beyond map, pan map
              var map = this.map_;
              var bounds = map.getBounds();
              if (!bounds) return;

              // The position of the infowindow
              var position = this.latlng_;

              // The dimension of the infowindow
              var iwWidth = this.width_;
              var iwHeight = this.height_;

              // The offset position of the infowindow
              var iwOffsetX = this.offsetHorizontal_;
              var iwOffsetY = this.offsetVertical_;

              // Padding on the infowindow
              var padX = 40;
              var padY = 40;

              // The degrees per pixel
              var mapDiv = map.getDiv();
              var mapWidth = mapDiv.offsetWidth;
              var mapHeight = mapDiv.offsetHeight;
              var boundsSpan = bounds.toSpan();
              var longSpan = boundsSpan.lng();
              var latSpan = boundsSpan.lat();
              var degPixelX = longSpan / mapWidth;
              var degPixelY = latSpan / mapHeight;

              // The bounds of the map
              var mapWestLng = bounds.getSouthWest().lng();
              var mapEastLng = bounds.getNorthEast().lng();
              var mapNorthLat = bounds.getNorthEast().lat();
              var mapSouthLat = bounds.getSouthWest().lat();

              // The bounds of the infowindow
              var iwWestLng = position.lng() + (iwOffsetX - padX) * degPixelX;
              var iwEastLng = position.lng() + (iwOffsetX + iwWidth + padX) * degPixelX;
              var iwNorthLat = position.lat() - (iwOffsetY - padY) * degPixelY;
              var iwSouthLat = position.lat() - (iwOffsetY + iwHeight + padY) * degPixelY;

              // calculate center shift
              var shiftLng =
                  (iwWestLng < mapWestLng ? mapWestLng - iwWestLng : 0) +
                  (iwEastLng > mapEastLng ? mapEastLng - iwEastLng : 0);
              var shiftLat =
                  (iwNorthLat > mapNorthLat ? mapNorthLat - iwNorthLat : 0) +
                  (iwSouthLat < mapSouthLat ? mapSouthLat - iwSouthLat : 0);

              // The center of the map
              var center = map.getCenter();

              // The new map center
              var centerX = center.lng() - shiftLng;
              var centerY = center.lat() - shiftLat;

              // center the map to the new shifted center
              map.setCenter(new google.maps.LatLng(centerY, centerX));

              // Remove the listener after panning is complete.
              google.maps.event.removeListener(this.boundsChangedListener_);
              this.boundsChangedListener_ = null;
            };








    var LocationsView = Hackathon.View.extend({
        
        el: "#page",

        template: _.template(locationsTemplate),

        events: {
        
        },
        
        initialize: function() {
            t("inside initialize [locationsView.js]");

            App.collections.locationsCollection = new LocationsCollection();
            App.collections.locationsCollection.on('add change remove reset', this.renderLocations, this);
            App.collections.locationsCollection.fetch();


            
        },
        initMap: function() {
            t("inside initMap [locationsView.js]");

            var currentCoordinates = this.getCurrentLocation();

            d(this.getCurrentLocation());

            
            var currentPosition = {};
            currentPosition.lat = "-33.397";
            currentPosition.lng = "150.644";
            

            var myOptions = {
              zoom: 3, //8 very close || 1 close
              center: new google.maps.LatLng(currentPosition.lat, currentPosition.lng),
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              sensor: 'false'
            }
            window.map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

        },

        displayPins: function() {
            t("inside displayPins [locationsView.js]");

            
            var customPinIcon = new google.maps.MarkerImage(
                "http://dl.dropbox.com/u/6984734/custom_pin.png",
                new google.maps.Size(40, 50),
                new google.maps.Point(0, 0)
            );

            _.each(App.collections.locationsCollection.models, function(location) {

                var lat = location.get('locationLatitude');
                var lng = location.get('locationLongitude');

                var uniqueKey = lat + ";" + lng;

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(lat, lng),
                    icon: customPinIcon,
                    map: window.map
                });
                google.maps.event.addListener(marker, "click", function(e) {
                  //var infoBox = new InfoBox({latlng: marker.getPosition(), map: window.map, htmlContent: window.pinDetails});
                  var infoBox = new InfoBox({latlng: marker.getPosition(), map: window.map, uniqueKey: uniqueKey});
                });
                //google.maps.event.trigger(marker, "click");

            });

        },

        getCurrentLocation: function() {
            t("inside getCurrentLocation [locationsView.js]");
            
            var currentPosition = {};
            
            navigator.geolocation.getCurrentPosition(function(position) {
                currentPosition.lat = position.coords.latitude;
                currentPosition.lng = position.coords.longitude;
                return currentPosition;
            }, function(error) {
                d('message: ' + error.message);
                currentPosition.lng = "-71.087551";
                currentPosition.lat = "42.360653";
                return currentPosition;
            });

        },


        render: function() {
            t("inside render [locationsView.js]");
            
            this.$el.html(this.template());
            
            this.initMap();
            
            if(typeof window.locHtml !== "undefined") {
                $("#leftMenu").html(locHtml);
            }

            this.displayPins();

        },

        renderLocations: function() {
            t("inside renderLocations [locationsView.js]");		
			
		        window.locHtml =  '<ul class="vertical-tabs">';
            window.locationDetails = {};			      

      			_.each(App.collections.locationsCollection.models , function(item) { 
      				  
                var lat = item.get('locationLatitude');
                var lng = item.get('locationLongitude');


                var uniqueKey = lat + ";" + lng;
                
                var iconImage = "";
                locHtml += '<li class="item">';
      				  locHtml += '<div style="color: #f2b309; font-weight: bold; font-size: 18px;">' + item.get("locationName") + '</div>';
      				  locHtml += '<div style="font-size: 12px;">' + item.get("locationAddress") + '</div><div>';
      				
        				_.each(item.get("resourcesInNeed") , function(item2, i) { 
        					locHtml += '<img src="images/' + item2.resourceInNeedName + '.png"/>';		
                            iconImage += '<img src="images/' + item2.resourceInNeedName + '.png"/>';
        				});
      							
        				locHtml += '</div></li>';

                var pinDetails = 
                  '<div style="color: #f2b309; font-weight: bold; font-size: 18px;">' + item.get("locationName") + '</div>' +
                  '<div style="font-size: 12px;">' + item.get("locationAddress") + '</div><div>' +
                  iconImage + "</div>";

                window.locationDetails[uniqueKey] = pinDetails;                    



      			});
			
			locHtml += '</ul>';
			


			$("#leftMenu").html(locHtml);
						    
            this.displayPins();
        }
    });
    
    return LocationsView;
});
