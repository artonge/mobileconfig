'use strict';

const path = require('path');
const fs = require('fs-extra');
const jsdoc2md = require('jsdoc-to-markdown');
const diff = require('diff');
const Mocha = require('mocha');
const Chai = require('chai');

const { Test, Suite } = Mocha;
const { expect } = Chai;

const docSuite = new Suite('mobileconfig documentation tests');

// ----- module export tests ----- //
const structureSuite = new Suite('Documentation structure tests');

structureSuite.addTest(new Test('Docs folder present', () => {
  return fs.pathExists(path.join(__dirname, '../../docs'));
}));

docSuite.addSuite(structureSuite);

module.exports = () => { return docSuite; };
