'use strict';

angular.module('modalExercise.version', [
  'modalExercise.version.interpolate-filter',
  'modalExercise.version.version-directive'
])

.value('version', '0.1');
