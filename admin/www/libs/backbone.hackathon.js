/**
 * This class is here to be on top of all Backbone objects
 * in order to add basic functions in the classes in once.
 * It extends Backbone.Model, Backbone.Collection, Backbone.View
 * and Backbone.Router. In this Hackathon project, all classes
 * should never inherit Backbone classes anymore, but Hackathon
 * classes instead.
 * 
 */
(function (Backbone, iScroll, _, $) {
	Hackathon   = {};
    var iscroll = null;

	/**************************************************************************
	 * VIEW
	 **************************************************************************/
	Hackathon.View = function(options){
		///////////////////////////////////////////////////////////////////////

		/**
		 * This function aims to make a transition towards a specific URL, using 
		 * slide animation. Options which are available are:
		 * {
		 * 		direction: "forward|backward" // Direction for the slide effect. Default: forward
		 * }
		 * 
		 * @param  {String} URL     The URL to reach.
		 * @param  {JSON}   options Options to define some behaviour.
		 * @return {nil}
		 */
		this.transition = function(URL, options) {
			if (iscroll) {
				iscroll.destroy();
				iscroll = null;
			}

			// Set default options if empty
			var options   = options || {};
			var width     = $("#page").width();
			var direction = options.direction || 'forward';

			// If a transition is already in progress, wait for the end to do the next one.
			if ($("#old-page").length) return;

			// Transfer the content of the page to an old page that
			// will be removed afterward
			$('#page-bg').append(
				$('<div id="old-page"></div>').html($("#page").html())
			);

			// Move the current page to a hidden part for the transition
			$("#page").css('left', (direction == 'backward' ? '-' : '') + width + 'px')
					  .html('');

			var self = this;

			// We display the transition only if the content changes.
			$("#page").on('DOMSubtreeModified', function () {
				// Make the transition
				$('#old-page, #page').transition(
					{x: (direction == 'backward' ? '' : '-') + width + 'px'}, 
					800, 
					'cubic-bezier(0,0.9,0.3,1)',
					function () {
						// Remove the old content
						$("#old-page").remove();

						// No need to keep the transition style
						$("#page").removeAttr('style');
					}
				);

				// Remove the event to avoid memory leak
				$("#page").off('DOMSubtreeModified');

                iscroll = new iScroll("page");
			});

			window.location = URL;
		};

		///////////////////////////////////////////////////////////////////////

		/**
		 * Set slide effet to all links present in the page. If an attribute 
		 * "data-direction" is specified in the HTML, then use it as direction
		 * option for this.transition().
		 * 
		 * @param   {Object} e Element on which we set the function to call when
		 *                     the link is touched.
		 * @return  {false}
		 * @private
		 */
		this._links = function(e) {
			var target = $(e.target);
			if ($(e.target).get(0).tagName != 'A')
				target = $(e.target).parent('a');

			this.transition(target.attr('href'), {
				direction: target.attr("data-direction") == 'backward' ? 'backward' : 'forward'
			});
			return false;
		};

		/**
		 * Change the cursor to show a pointer.
		 * 
		 * @param   {Object} e Element touched / clicked.
		 * @return  {nil}
		 * @private
		 */
		this._pointer = function(e) { 
			$(e.target).css("cursor", "pointer");
		};

		///////////////////////////////////////////////////////////////////////

		/**
		 * Function called when clicking to a button in a tabbar. Basically unselect
		 * a potential previous selected tab, and select the current one.
		 * This function tries to display a tag having the same id as the one written
		 * in data-target attribute from the tab button.
		 * 
		 * @param   {Object} e Element touched / clicked.
		 * @return  {nil}
		 * @private
		 */
		this._changeTab = function(e) { 
			if (typeof e.target == "undefined")
				return;
			
			if (e.target.tagName != "LI")
				e.target = $(e.target).closest('li').get(0);

			// Hide other tabs
			$(e.target).siblings("li[data-target]").each(function(id, elem) {
				$("#" + $(elem).attr('data-target')).hide();
				$(elem).removeClass("selected");
			})

			// Show the new tab
			$(e.target).addClass("selected");

			// Scroll to the top
			if (iscroll)
				iscroll.scrollTo(0, 0);
		};

		/**
		 * Same function as _changeTab(), but instead of showing a DOM element,
		 * change the URL to the one written in data-target-url attribute.
		 * 
		 * @param   {Object} e Element touched / clicked.
		 * @return  {nil}
		 * @private
		 */
		this._changeTabUrl = function(e) { 
			var target = $(e.target);
			if ($(e.target).get(0).tagName != 'LI')
				target = $(e.target).closest('li');

			// If a transition is already in progress, wait for the end to do the next one.
			if ($("#old-page").length) return;

            // if the target is already selected, do nothing
            if ($(e.target).hasClass('selected'))
                return;

			// Hide other tabs
			target.siblings("li.selected").each(function(id, elem) {
				$(elem).removeClass("selected");
			})

			// Change the direction of the other transitions
			target.prevAll("li[data-target-url]").each(function(id, elem) {
				$(elem).attr('data-direction', 'backward');
			});
			target.nextAll("li[data-target-url]").each(function(id, elem) {
				$(elem).attr('data-direction', 'forward');
			});

			// Show the new tab
			target.addClass("selected");

			this.transition(target.attr('data-target-url'), {
				direction: target.attr("data-direction") == 'backward' ? 'backward' : 'forward'
			});
		};

		///////////////////////////////////////////////////////////////////////

		// Add extra events
		var events = this.events || {};

		this.events = _.extend({
			"touchstart a"							     : "_links" 		,
			"touchstart ul.tabs li[data-target]"         : "_changeTab"		,
			"mouseover  ul.tabs li[data-target]"         : "_pointer"		,
			"touchstart ul.tabs li[data-target-url]"     : "_changeTabUrl"  ,
			"mouseover  ul.tabs li[data-target-url]"     : "_pointer"		,
			"click ul.vertical-tabs li[data-target]"     : "_changeTab"		,
			"click ul.vertical-tabs li[data-target] *"   : "_changeTab"		,
			"mouseover  ul.vertical-tabs li[data-target]": "_pointer"
		}, events);

		// Bind 'this' to the current instance for all functions
		_.bindAll(this);

		// Call the initial constructor
		Backbone.View.call(this, options);
	};

	Hackathon.View.iscroll = function() {
        if (iscroll)
            iscroll.destroy();

		iscroll = new iScroll('page', {
	        //useTransform: false,
	        onBeforeScrollStart: function (e) {
	            var target = e.target;
	            while (target.nodeType != 1) target = target.parentNode;

	            if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA')
	                e.preventDefault();
	        }
	    });
	}

	// Add all the normal view fuctions
	_.extend(Hackathon.View.prototype, Backbone.View.prototype);

	// Add the extend ability
	Hackathon.View.extend = Backbone.View.extend;


	/**************************************************************************
	 * Collection
	 **************************************************************************/
	Hackathon.Collection = function (options) {
		// Call the initial constructor
		Backbone.Collection.call(this, options);
	};

	// Add all the normal router fuctions
	_.extend(Hackathon.Collection.prototype, Backbone.Collection.prototype);

	// Add the extend ability
	Hackathon.Collection.extend = Backbone.Collection.extend;


	/**************************************************************************
	 * Model
	 **************************************************************************/
	Hackathon.Model = function (options) {
		// Call the initial constructor
		Backbone.Model.call(this, options);
	};

	// Add all the normal router fuctions
	_.extend(Hackathon.Model.prototype, Backbone.Model.prototype);

	// Add the extend ability
	Hackathon.Model.extend = Backbone.Model.extend;


	/**************************************************************************
	 * Router
	 **************************************************************************/
	Hackathon.Router = function (options) {
		// Call the initial constructor
		Backbone.Router.call(this, options);
	};

	// Add all the normal router fuctions
	_.extend(Hackathon.Router.prototype, Backbone.Router.prototype);

	// Add the extend ability
	Hackathon.Router.extend = Backbone.Router.extend;


	/**************************************************************************
	 * View Manager
	 **************************************************************************/
	Hackathon.VM = function(namespace, parentView) {
		// Create the first namespace object
		if (typeof Hackathon.VM.ns == 'undefined')
			Hackathon.VM.ns = {};

		parentView = parentView || null;

		var DOMElement  = (typeof namespace !== "string") ? namespace : $(namespace);
		var DOMSelector = (typeof namespace !== "string") ? namespace.selector : namespace;

		// Add the new namespace to the stack if it does not exist
		if (typeof Hackathon.VM.ns[DOMSelector] === "undefined" || Hackathon.VM.ns[DOMSelector] === null)
			Hackathon.VM.ns[DOMSelector] = {
				parentView: parentView,
				// DOMElement where to show the rendering
				DOMElement: DOMElement,
				// DOMSelector where to show the rendering
				DOMSelector: DOMSelector,
				// Instance of view to display
				views: [],
				clean: function (view) {
					if (typeof view === "undefined") return;

					console.log("Destroy " + view.cid + '(' + this.DOMSelector + ')');

					// Look for the other views that may belong to this view
					_.each(Hackathon.VM.ns, function(vm, selector){
						if (vm !== null && vm.parentView !== null)
							if (vm.parentView === view)
								vm.destroy();
					});

					// Destroy the view itself
					if (typeof view.destroy !== 'undefined') view.destroy();
					view.remove();
					view = null;
				},
				// Destroy the namespace
				cleanAll: function() {
					_.each(this.views, this.clean, this);
					this.views = [];
				},
				// Destroy the namespace
				destroy: function() {
					this.cleanAll();
					Hackathon.VM.ns[this.DOMSelector] = null;
				},
				_computedElement: function(){
					if (this.parentView)
						try {
							return this.parentView.$(this.DOMSelector);
						} catch (e) {
							console.error(this.parentView);
							throw(e);
						}
					else
						return this.DOMElement;
				},
				// Replace the view inside of the DOMElement
				replace: function(view){
					// Clean what was here before
					this.cleanAll();
					// Append to the DOM
					this.append(view);
				},
				// Replace the view inside of the DOMElement
				append: function(view){
					this.views.push(view);
					this._computedElement().append(view.render().el);
					view.delegateEvents();
				}
			};

		// Return the proper namespace
		return Hackathon.VM.ns[DOMSelector];
	}

})(Backbone, iScroll, _, $);
