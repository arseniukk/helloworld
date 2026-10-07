/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require([
    "helloworld/test/unit/AllTests"
], function () {
    "use strict";

    QUnit.start();
});