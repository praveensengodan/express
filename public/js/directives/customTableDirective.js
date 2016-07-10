app.directive('customTable',function(){
  return {
    scope: {
      options: '=',
      headers: '=',
      rows: '=',
      columns: '=',
      action: '&'
    },
    templateUrl: '../../partials/custom-table.html' ,
    replace: 'true',
    restrict: 'E',
    link: function(scope){
      scope.itemsPerPage = 5;
      scope.currentPage = 1;
      scope.sort = function(sortBy){
        scope.options.sortBy = sortBy;
        scope.options.sortReverse = !scope.options.sortReverse;
      }
      scope.range = function() {
        scope.pages = [1];     
        if(scope.rows){
        var length = scope.rows.length;
        var itemsPerPage = scope.itemsPerPage;  
          if(length > itemsPerPage){
            for (var i = 1; i <= (length-5); i++) {
              if(i % itemsPerPage === 0) {
                scope.pages.push(scope.pages.length+1);
              } 
            }
            (length % itemsPerPage) ? scope.pages.push(scope.pages.length+1) : null;
          } 
       } 
        return scope.pages;
      }
      scope.prev = function(){
        if(scope.currentPage > 1){
          --scope.currentPage;
        }
      }
      scope.next = function(){
        if(scope.currentPage < scope.pages.length){
          ++scope.currentPage;
        }
      }
      scope.setPage = function(page){
        scope.currentPage = page;
      }
    }
  }
});