(function() {
  angular
    .module('githubViewer')
    .directive('autoFocus', ['$document', autoFocus]);

  function autoFocus($document) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs, controller) {
        $document.ready(function() {
          element.focus();
        });
      }
    }
  }
})();