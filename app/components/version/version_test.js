'use strict';

describe('modalExercise.version module', function() {
  beforeEach(module('modalExercise.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
