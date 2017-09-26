(function() {
  function userRepos() {
    return {
      restrict: 'E',
      templateUrl: '/templates/directives/userRepos.html',
      replace: false,
      scope: {
        repo: '='
      }
    };
  }

  angular
    .module('githubViewer')
    .directive('userRepos', [userRepos]);
})();