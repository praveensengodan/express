app.factory('API',function($http,$location,$q){
  return {
    create : function(obj){
      $http.post('/api/create',obj).then(function(res){
        console.log(res);
        if(res.status == 201){
          alert("created !!");
          $location.path('#/table');
        }
      },function(err){
        console.log(err);
        alert(err.statusText+"    "+err.status)
      });
    },
    getTabledata: function(){
      return $http.get('/api/persons').then(function(res){
        console.log(res);
        return res.data.entity;
      },function(err){
        console.log(err);
      })
    }
  }
});
