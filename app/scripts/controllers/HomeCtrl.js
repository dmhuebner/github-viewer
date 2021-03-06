(function() {
  function HomeCtrl(github, $log) {
    var home = this;

    home.test = 'Testing Home Controller';

    home.reposSortOrder = 'name';

    // Private Methods

    var onUserReposComplete = function(data) {
      home.currentUserRepos = data;
      $log.info(data);
    };

    var onUserComplete = function(data) {
      home.currentUserObj = data;
      home.searchError = null;
      home.searchSuccess = true;

      github.getRepos(home.currentUserObj)
        .then(onUserReposComplete, onError);
    };

    var onError = function(response) {
      home.searchError = 'There was an error processing your request. Please try again.';
      home.searchSuccess = false;
      $log.error(response.header);
    };

    home.search = function(username) {
      if (username) {
        $log.info('Searching for ' + username);
        github.getUser(username)
          .then(onUserComplete, onError);
      } else {
        home.searchError = 'You can\'t search for nothing...';
      }
    }

    // Controller Methods

  }

  angular
    .module('githubViewer')
    .controller('HomeCtrl', ['github', '$log', HomeCtrl]);
})();