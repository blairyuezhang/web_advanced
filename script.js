$(document).ready(function(){
   $(".trigger").on("mouseover",function(){
      $(".bg").fadeIn();
  });

   $(".trigger").on("mouseout",function(){
      $(".bg").fadeOut();
  });

  $("#pjo").on("mouseover", function(){
    $("#one").fadeIn();
  })

  $("#pjo").on("mouseout", function(){
    $("#one").fadeOut();
  })

  $("#pj2").on("mouseover", function(){
    $("#two").fadeIn();
  })

  $("#pj2").on("mouseout", function(){
    $("#two").fadeOut();
  })

  $("#pj3").on("mouseover", function(){
    $("#three").fadeIn();
  })

  $("#pj3").on("mouseout", function(){
    $("#three").fadeOut();
  })

  $("#pj4").on("mouseover", function(){
    $("#four").fadeIn();
  })

  $("#pj4").on("mouseout", function(){
    $("#four").fadeOut();
  })

  $("#stp").on("mouseover", function(){
    $("#thesis").fadeIn();
  })

  $("#stp").on("mouseout", function(){
    $("#thesis").fadeOut();
  })


});
