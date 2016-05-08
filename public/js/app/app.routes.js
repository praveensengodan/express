angular.module('app.routes',['ngRoute'])
  .config(function($routeProvider){
      $routeProvider
        .when('/create',{
          templateUrl : 'partials/create.html',
          controller : 'CreateController'
        })
        .when('/',{
          templateUrl : 'partials/table.html',
          controller : 'TableController'
        })
        .otherwise('/',{
          redirectTo: '/'
        })
  });
