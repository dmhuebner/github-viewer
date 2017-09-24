(function() {
  function HomeCtrl(github, $log) {
    var home = this;

    home.test = "Testing Home Controller";

    // Private Methods

    var onUserComplete = function(data) {
      home.currentUserObj = data;
      home.searchError = null;
      home.searchSuccess = true;
    };

    var onError = function(response) {
      home.searchError = "There was an error processing your request";
      home.searchSuccess = false;
      $log.error(response.header);
    };

    // Controller Methods

    home.search = function(username) {
      $log.info("Searching for " + username);
      github.getUser(username)
        .then(onUserComplete, onError);
    }

  }

  angular
    .module('githubViewer')
    .controller('HomeCtrl', ['github', '$log', HomeCtrl]);
})();