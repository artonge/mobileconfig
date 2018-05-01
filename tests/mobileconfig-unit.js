'use strict';

const Mocha = require('mocha');

const { Suite } = Mocha;

const documentationSuite = require('./units/documentation');

const mocha = new Mocha();

const fullSuite = Suite.create(mocha.suite, 'mobileconfig full test suite');

Promise.resolve()
  .then(() => { return fullSuite.addSuite(documentationSuite()); })
  .then(() => {
    return mocha.run((failures) => {
      process.on('exit', () => {
        process.exit(failures);
      });
    });
  })
  .catch((err) => {
    console.error(err);
  });
