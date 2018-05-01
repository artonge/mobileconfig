'use strict';

const path = require('path');
const fs = require('fs-extra');
const Mocha = require('mocha');
const Chai = require('chai');

const { Test, Suite } = Mocha;
const { expect } = Chai;

const moduleSuite = new Suite('mobileconfig module tests');

// ----- module export tests ----- //
const exportSuite = new Suite('Export tests');

exportSuite.addTest(new Test('CivoAPI exports class constructor', () => {
  expect(civocloud.Civo).to.be.an('function', 'module should export the CivoAPI class constructor');
}));

moduleSuite.addSuite(exportSuite);

module.exports = () => { return moduleSuite; };
