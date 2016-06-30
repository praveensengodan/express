app.controller('LogoutController',function($scope,$location,API,UserInfo){
  $scope.logout = function() {
     API.logout();
  }
  $scope.check = function(){
     $scope.username = UserInfo.username;
     var returnValue;
     if($location.path() == '/'){
        returnValue = false;
     } else if($location.path() == '/signup'){
        returnValue = false;
     } else{
         returnValue = true;
     }
     return returnValue;
  }
});
