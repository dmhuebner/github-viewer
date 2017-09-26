(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/templates/home.html',
        controller: 'HomeCtrl as home'
      })
      .state('userState', {
        url: '/users/:username',
        templateUrl: '/templates/user.html',
        controller: 'UserCtrl as user'
    });
  }

  angular
    .module('githubViewer', ['ui.router'])
    .config(config);
})();