(function() {
  function HomeCtrl() {
    var home = this;

    home.test = "Testing Home Controller";

  }

  angular
    .module('githubViewer')
    .controller('HomeCtrl', [HomeCtrl]);
})();