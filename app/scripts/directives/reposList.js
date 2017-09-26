(function() {
  function repoList() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/repoList.html',
      controller: 'HomeCtrl',
      transclude: true,
      scope: {
        currentUserRepos: '=',
        reposSortOrder: '='
      }
    };
  }

  angular
    .module('githubViewer')
    .directive('repoList', [repoList]);
})();