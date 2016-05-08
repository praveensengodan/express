app.controller('CreateController',function($scope,$location,API){
  $scope.cancel = function(){
    $location.path('/');
  }
  $scope.save = function() {
    var obj = {
      name : $scope.name,
      address : $scope.address,
      phone_no : $scope.phone_no
    }
    API.create(obj);
  }
})
