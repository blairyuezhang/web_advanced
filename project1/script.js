$(document).ready(function(){
  
  $(".fundation").on("mouseover",function(){
    $(".t1").fadeIn();
  });
  
  $(".t1").on("mouseover",function(){
    $(".fundation, .eye, .lip, .face").fadeOut();
  });
  
  $(".t1").on("mouseout",function(){
    $(".t1").fadeOut();
    $(".fundation, .eye, .lip, .face").fadeIn();
  });


  $(".eye").on("mouseover",function(){
    $(".t2").fadeIn();
  });
  
  $(".t2").on("mouseover",function(){
    $(".fundation, .eye, .lip, .face").fadeOut();
  });
  
  $(".t2").on("mouseout",function(){
    $(".t2").fadeOut();
    $(".fundation, .eye, .lip, .face").fadeIn();
  });
  
  $(".lip").on("mouseover",function(){
    $(".t3").fadeIn();
  });
  
  $(".t3").on("mouseover",function(){
    $(".fundation, .eye, .lip, .face").fadeOut();
  });
  
  $(".t3").on("mouseout",function(){
    $(".t3").fadeOut();
    $(".fundation, .eye, .lip, .face").fadeIn();
  });
  
  $(".face").on("mouseover",function(){
    $(".t4").fadeIn();
  });
  
  $(".t4").on("mouseover",function(){
    $(".fundation, .eye, .lip, .face").fadeOut();
  });
  
  $(".t4").on("mouseout",function(){
    $(".t4").fadeOut();
    $(".fundation, .eye, .lip, .face").fadeIn();
  });

  
  
  
  
  
  
  
})