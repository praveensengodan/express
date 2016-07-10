app.directive('customTable',function(){
  return {
    scope: {
      options: '=',
      headers: '=',
      rows: '=',
      columns: '=',
      action: '&'
    },
    templateUrl: '../../partials/custom-table.html' ,
    replace: 'true',
    restrict: 'E',
    link: function(scope){
      scope.sort = function(sortBy){
        scope.options.sortBy = sortBy;
        scope.options.sortReverse = !scope.options.sortReverse;
      }
    }
  }
});