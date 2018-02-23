'use strict';

module.exports = function(chai, utils) {
   var origStrictEqual = chai.Assertion.prototype.equal;

   utils.addMethod(chai.Assertion.prototype, 'strictlyEqual', function() {
      utils.flag(this, 'deep', false);
      origStrictEqual.apply(this, arguments);
   });

   utils.overwriteMethod(chai.Assertion.prototype, 'equal', function() {
      return function() {
         throw new Error('In our codebase you should use .eql for deep equality, and .strictlyEqual for strict equality checks');
      };
   });
};
