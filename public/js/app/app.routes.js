angular.module('app.routes',['ngRoute'])
  .config(function($routeProvider){
      $routeProvider
        .when('/create',{
          templateUrl : 'partials/create.html',
          controller : 'CreateController'
        })
        .when('/table',{
          templateUrl : 'partials/table.html',
          controller : 'TableController'
        })
        .when('/signup',{
          templateUrl : 'partials/signup.html',
          controller : 'SignupController'
        })
        .when('/',{
          templateUrl : 'partials/login.html',
          controller : 'LoginController'
        })
        .otherwise('/',{
          redirectTo: '/'
        })
  });
