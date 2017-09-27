(function() {
  function github($http, $q) {

    var github = {
      githubUserObj: null,
      currentUserRepos: null
    };

    var setCurrentGithubUserObj = function(obj) {
      return github.githubUserObj = obj;
    };

    var getCurrentGithubUserObj = function() {
      return github.githubUserObj;
    };

    var setCurrentUserRepos = function(obj) {
      return github.currentUserRepos = obj;
    };

    var getCurrentUserRepos = function() {
      return github.currentUserRepos;
    };

    var getUser = function(username) {
      var deferred = $q.defer();
      return $http.get('https://api.github.com/users/' + username)
        .then(function(response) {
          setCurrentGithubUserObj(response.data);
          deferred.resolve(response.data);
          return deferred.promise;
        });
    };

    var getRepos = function(user) {
      return $http.get(user.repos_url)
        .then(function(response) {
          setCurrentUserRepos(response.data);
          return response.data;
        });
    };

    return {
      getUser: getUser,
      getRepos: getRepos,
      getCurrentUser: getCurrentGithubUserObj,
      getCurrentUserRepos: getCurrentUserRepos
    }
  }

  angular
    .module('githubViewer')
    .factory('github', ['$http', '$q', github]);
})();