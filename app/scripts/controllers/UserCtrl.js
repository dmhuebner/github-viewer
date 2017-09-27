(function() {
  function UserCtrl($stateParams, $log, github) {
    var user = this;

    user.username = $stateParams.username;

    user.reposSortOrder = 'name';

    // user.currentUserObj = github.getCurrentUser();

    github.getUser($stateParams.username)
      .then(function (result) {
        console.log(result);
        user.currentUser = result;
      });

    user.currentUserRepos = github.getCurrentUserRepos();

    // function exampleAdd(x, y, callback) {
    //   $timeout(function() {
    //     callback(x + y);
    //   }, 1000);
    // }
    //
    // exampleAdd(5, 3, function(result) {
    //   user.result = result;
    // });

  }

  angular
    .module('githubViewer')
    .controller('UserCtrl', ['$stateParams', '$log', 'github', UserCtrl]);
})();