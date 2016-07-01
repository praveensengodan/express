app.factory('API',function($http,$location){
  return {
    create : function(obj){
      $http.post('/api/create',obj).then(function(res){
        console.log(res);
        if(res.status == 201){
          alert("created !!");
          $location.path('/table');
        }
      }).catch(function(err){
         if(err.status == 401){
           alert('Unauthorized access! Please Login again')
           $location.path('/table');
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
           alert('Unauthorized access! Please Login again');
           $location.path('/');
        }
        console.log(err);
      })
    },
    authenticate: function(obj){
      return $http.post('/api/authenticate',obj).then(function(res){
        if(res.status == '200'){   
          sessionStorage.username = res.data.username;
          alert("Logged In !!");
          $location.path('/table');
        }
      }).catch(function(err){
          if(err.status == '401'){
            alert('Username or Password may be wrong');
          }
          console.log(err);
      })
    },
    signup: function(obj){
      return $http.post('/api/signup',obj).then(function(res){
        alert('Successfully signed up');
        $location.path('/');
      }).catch(function(err){
        console.log(err);
      })
    },
    logout: function(){
      return $http.get('/api/logout').then(function(res){
        delete sessionStorage.username;
        $location.path('/');
      }).catch(function(err){
        console.log(err);
      })
    },
    delete: function(id){
      return $http.delete('/api/person/'+id);
    }
  }
});
