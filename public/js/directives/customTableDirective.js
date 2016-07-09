app.directive('customTable',function(){
  return {
    scope: {
      options: '=',
      headers: '=',
      rows: '=',
      columns: '='
    },
    templateUrl: '../../partials/custom-table.html' ,
    replace: 'true',
    restrict: 'E',
    controller: 'CustomTableController'
  }
}).controller('CustomTableController',function($scope){
  $scope.sort = function(sortBy){
    $scope.options.sortBy = sortBy;
    $scope.options.sortReverse = !$scope.options.sortReverse;
  }
});

