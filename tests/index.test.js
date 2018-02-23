'use strict';

var chai = require('chai'),
    expect = chai.expect,
    ERROR_MSG = 'In our codebase you should use .eql for deep equality, and .strictlyEqual for strict equality checks';

chai.use(require('../src'));

describe('@silvermine/chai-strictly-equal', function() {

   describe('.equal', function() {
      function runTestExpectingError(fn) {
         expect(fn).to.throw(ERROR_MSG);
      }

      it('throws an error', function() {
         runTestExpectingError(function() {
            expect('abc').to.equal('abc');
         });
      });

      it('throws an error - with "not"', function() {
         runTestExpectingError(function() {
            expect('abc').not.to.equal('abc');
         });
      });

      it('throws an error - with "deep"', function() {
         runTestExpectingError(function() {
            expect('abc').to.deep.equal('abc');
         });
      });

   });

   describe('.strictlyEqual', function() {

      it('checks strict equality', function() {
         var o = {};

         expect(true).to.strictlyEqual(true);
         expect(o).to.strictlyEqual(o);
      });

      it('allows negation', function() {
         var o1 = {},
             o2 = {};

         expect(true).not.to.strictlyEqual(false);
         expect(o1).not.to.strictlyEqual(o2);
         expect(o2).not.to.strictlyEqual(o1);
      });

      it('does strict equality checks even when the .deep modifier is used, with or without .not', function() {
         var o1 = {},
             o2 = {};

         expect(true).to.deep.strictlyEqual(true);
         expect(o1).to.deep.strictlyEqual(o1);
         expect(o2).to.deep.strictlyEqual(o2);

         expect(true).not.to.deep.strictlyEqual(false);
         expect(o1).not.to.deep.strictlyEqual(o2);
         expect(o2).not.to.deep.strictlyEqual(o1);
      });

   });

});
