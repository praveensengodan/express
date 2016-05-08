app.controller('TableController',function($scope,$location,API){
  $scope.add = function(){
    $location.path('/create');
  }
  API.getTabledata().then(function(data){
    $scope.persons = data;
  });

})
