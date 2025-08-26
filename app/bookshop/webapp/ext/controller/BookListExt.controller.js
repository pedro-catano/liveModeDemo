sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('bookshop.ext.controller.BookListExt', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf bookshop.ext.controller.BookListExt
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},

			onAfterRendering: function() {
				const view = this.base.getView();
				const fb = view.byId("bookshop::BooksList--fe::FilterBar::Books");
				if (!fb) { return; }
				// ensure no live validation noise on load
				fb.setLiveMode(false);
				// once the user performs the first search, go live for the rest of the session
				fb.attachSearch(() => fb.setLiveMode(true));
			}
		}
	});
});
