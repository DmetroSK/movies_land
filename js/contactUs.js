// JavaScript Document
/*b3duZXJzOnNheXUgYW5kIHByYW11ZGl0aGEg*/ 
$(document).ready(function() {

  $('#form').validator().on('submit', function(e) {
    if (e.isDefaultPrevented()) {
      // handle the invalid form...
      $('#myModal').modal('hide');
    } else {
      // everything looks good!
      $('#myModal').modal('show');
    }
  })

});