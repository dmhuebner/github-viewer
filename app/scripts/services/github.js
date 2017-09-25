(function() {
  function github($http) {

    var getUser = function(username) {
      return $http.get('https://api.github.com/users/' + username)
          .then(function(response) {
            return response.data;
          });
    };

    var getRepos = function(user) {
      return $http.get(user.repos_url)
        .then(function(response) {
          return response.data;
        });
    };

    // var getGravatar = function(user) {
    //   return $http.get(user.avatar_url)
    //     .then(function(response) {
    //       return response.data;
    //     });
    // };

    return {
      getUser: getUser,
      // getGravatar: getGravatar,
      getRepos: getRepos
    }
  }

  angular
    .module('githubViewer')
    .factory('github', ['$http', github]);
})();