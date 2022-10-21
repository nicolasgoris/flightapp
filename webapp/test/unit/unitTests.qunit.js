/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"edu/be/ap/flight/zsd000flight/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});