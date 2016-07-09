app.controller('TableController',function($scope,$location,API){
  $scope.add = function(){
    console.log('inside add')
    $location.path('/create');
  }
  $scope.headers =[
    {title:'name'},
    {title:'address'},
    {title:'phone_no',sort:true},
    {title:'action',sort:false},
    ];
  $scope.options={
    title: 'Person List',
    sortBy: 'name',
    sortReverse: false,
  }
  $scope.columns=['name','address','phone_no'];
  $scope.delete = function(id){
    API.delete(id).then(function(res){
        if(res.status == 200){
         API.getTabledata().then(function(data){
            $scope.persons = data;
          });
        }
      }).catch(function(err) {
        console.error(err);
      })
  }
  API.getTabledata().then(function(data){
    $scope.rows = data;
  });
});
