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
      scope.itemsPerPageOption = [5,10,20,40,50,100];
      scope.itemsPerPage =  scope.itemsPerPageOption[0];
      scope.currentPage = 1;
      scope.sort = function(sortBy){
        this.options.sortBy = sortBy;
        this.options.sortReverse = !this.options.sortReverse;
      }
      scope.range = function() {
        this.pages = [1];     
        if(this.rows){
        var length = this.rows.length;
        var itemsPerPage = this.itemsPerPage;  
          if(length > itemsPerPage){
            for (var i = 1; i <= (length-5); i++) {
              if(i % itemsPerPage === 0) {
                this.pages.push(this.pages.length+1);
              } 
            }
            (length % itemsPerPage) ? this.pages.push(this.pages.length+1) : null;
          } 
       } 
        return this.pages;
      }
      scope.prev = function(){
        if(this.currentPage > 1){
          --this.currentPage;
        }
      }
      scope.next = function(){
        if(this.currentPage < this.pages.length){
          ++this.currentPage;
        }
      }
      scope.setPage = function(page){
        scope.currentPage = page;
        this.tableData();
      }
      scope.tableData = function() {
        if(this.rows) {
           var itemsToBeDisplayed = this.currentPage * this.itemsPerPage;
           return this.rows.slice((itemsToBeDisplayed - this.itemsPerPage),itemsToBeDisplayed);
        }
      }
    }
  }
});