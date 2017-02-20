$(document).ready(function(){

    $('form').on('submit', function(event){
    $("#hello").text("Hello, " + $('#name').val());

     event.preventDefault();
   });

  });

 

 
