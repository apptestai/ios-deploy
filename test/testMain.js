/**
 * Make sure you connect an iOS device before you launch a test.
 */

const {iosDeploy} = require("../index");

tester = new iosDeploy('./build/Build/Products/Debug/ios-deploy');

// tester.getDevices();

tester.getUsbDevices();

// parse one udid from the top
// tester.getPackagesList();