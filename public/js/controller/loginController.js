app.controller('LoginController',function($scope,$location,API){
  $scope.authenticate = function() {
    var obj ={
      username: $scope.username,
      password: $scope.password
    }
    API.authenticate(obj);
  } 
  $scope.signup = function(){
    $location.path('/signup');
  }
})
