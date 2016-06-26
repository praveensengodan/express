app.controller('SignupController',function($scope,$location,API){
  $scope.signup = function () {
    if($scope.password !== $scope.confirm_password){
      alert('Password and Confirm Password must be same');
    } else{
      var obj ={
        username: $scope.username,
        password: $scope.password,
      }
      API.signup(obj);
    }
  }
  $scope.cancel = function(){
    $location.path('/login');
  }
  $scope.signup = function(){
    $location.path('/signup');
  }
});
