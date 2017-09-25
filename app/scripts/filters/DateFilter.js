(function() {
  function DateFilter() {
    return function(input) {
      var date = new Date(input);
      var day = date.getDate();
      var month = (date.getMonth()) + 1;
      var year = date.getFullYear();

      var dateFormat =  function(dateItem) {
        if (dateItem < 10) {
          dateItem = '0' + dateItem;
        }
        return dateItem;
      };

      console.log(dateFormat(month));

      var output = dateFormat(month) + '-' + dateFormat(day) + '-' + dateFormat(year);

      return output;
    }
  }

  angular
    .module('githubViewer')
    .filter('DateFilter', [DateFilter]);
})();