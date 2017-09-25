(function() {
  function UserCtrl($stateParams) {
    var user = this;

    user.username = $stateParams.username;
  }

  angular
    .module('githubViewer')
    .controller('UserCtrl', ['$stateParams', UserCtrl]);
})();