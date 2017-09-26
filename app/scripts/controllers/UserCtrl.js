(function() {
  function UserCtrl($stateParams, $log, github) {
    var user = this;

    user.username = $stateParams.username;

    user.reposSortOrder = 'name';

    user.currentUserObj = github.getCurrentUser();

    user.currentUserRepos = github.getCurrentUserRepos();

  }

  angular
    .module('githubViewer')
    .controller('UserCtrl', ['$stateParams', '$log', 'github', UserCtrl]);
})();