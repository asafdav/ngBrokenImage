'use strict';

angular.module('ngBrokenImage').
  directive('brokenImage', ['$parse', function($parse) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.bind('error', function(e) {
          element.attr('src', $parse(attrs.brokenImage)());
        });
      }
    }
  }]);
