'use strict';

const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const expect = require('chai').expect;
const validator = require('is-my-json-valid');
const stripComments = require('strip-json-comments');

const rulesFolder = './node_modules/eslint/lib/rules';
const config = JSON.parse(stripComments(readFile('.eslintrc.json')));
const rulesInConfig = Object.keys(config.rules);
const rulesInEslint = fs.readdirSync(rulesFolder);

describe('valor config rules set', () => {
  it('should contain same amount of rules', () => {
    expect(rulesInConfig.length).to.be.equal(rulesInEslint.length);
  });
  it('should contain all rules', () => {
    rulesInEslint.forEach(rule => {
      expect(rulesInConfig).to.contains(path.basename(rule, '.js'));
    });
  });
  it('should contain all rules options explicetely', () => {
    /* eslint-disable */
    rulesInEslint.forEach(rule => {
      const schema = require(path.join('..', rulesFolder, rule)).schema;
      const ruleSettings = config.rules[path.basename(path.basename(rule, '.js'))];
      if (!schema) {
        // rules without schema
        // as for eslint 2.7.0
        // accessor-pairs.js
        // array-bracket-spacing.js
        return;
      }

      // if schema is an empty array
      if (_.isArray(schema) && !schema.length) {
        expect(ruleSettings,
          `Settings for ${rule} should be a number, but ${ruleSettings} instead`).to.be.number;
        expect(ruleSettings === 2 || ruleSettings === 0,
          `Settings for ${rule} should be equal to 0 || 2, but ${ruleSettings} instead`).to.be.ok;
        return;
      }

      // if it's not an array, it should be just a severity
      let localOptions, severity;
      if (Array.isArray(options)) {
        // clone
        localOptions = options.concat();
        severity = localOptions.shift();
      } else {
        severity = options;
        localOptions = [];
      }

      const isValidSeverity = (
        severity === 0 || severity === 1 || severity === 2 ||
        (typeof severity === "string" && /^(?:off|warn|error)$/i.test(severity))
      );
      
      const validate = validator(schema);
      const isValid = validate(ruleSettings, {greedy: true, verbose: true});
      if (!isValid) {
        expect(isValid, `Settings for ${rule} is not valid, ${ruleSettings}`)
          .to.be.ok;
      }
      // console.log(rule, schema)
      // todo: validate
    });
  });
});

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}
