(function() {
  function UserCtrl($stateParams, $log, github) {
    var user = this;

    user.username = $stateParams.username;

    var onUserComplete = function(data) {
      user.currentUserObj = data;
      user.searchError = null;
      user.searchSuccess = true;

      var onUserReposComplete = function(data) {
        user.currentUserRepos = data;
        // $log.info(data);
      };

      github.getRepos(user.currentUserObj)
        .then(onUserReposComplete, onError);
    };

    var onError = function(response) {
      user.searchError = 'There was an error processing your request. Please try again.';
      user.searchSuccess = false;
      $log.error(response.header);
    };

    // Controller Methods

    var getUserObj = function(username) {
      if (username) {
        $log.info('Searching for ' + username);
        github.getUser(username)
          .then(onUserComplete, onError);
      } else {
        user.searchError = 'You can\'t search for nothing...';
      }
    }

    getUserObj(user.username);

  }

  angular
    .module('githubViewer')
    .controller('UserCtrl', ['$stateParams', '$log', 'github', UserCtrl]);
})();