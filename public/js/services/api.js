app.factory('API',function($http,$location,$q){
  return {
    create : function(obj){
      $http.post('/api/create',obj).then(function(res){
        console.log(res);
        if(res.status == 201){
          alert("created !!");
          $location.path('#/table');
        }
      }).catch(function(err){
         if(err.status == 401){
          $location.path('/')
        }
        console.log(err);
        alert(err.statusText+"    "+err.status)
      });
    },
    getTabledata: function(){
      return $http.get('/api/persons').then(function(res){
        console.log(res);
        return res.data.entity;
      }).catch(function(err){
         if(err.status == 401){
         $location.path('/')
        }
        console.log(err);
      })
    },
    authenticate: function(obj){
      return $http.post('/api/authenticate',obj).then(function(res){
        if(res.status == '200'){
          alert("Logged In !!");
          $location.path('/table');
        }
      }).catch(function(err){
          console.log(err);
      })
    },
    signup: function(obj){
      return $http.post('/api/signup',obj).then(function(res){
        console.log(obj);
      }).catch(function(err){
        console.log(err);
      })
    },
    logout: function(){
      return $http.get('/api/logout').then(function(res){
        $location.path('/');
      }).catch(function(err){
        console.log(err);
      })
    }
  }
});
