$(document).ready(function(){

  $("#button1").click(function(event){
    $("#bg2").eraser({
      size: 30,
      completeRatio: .1,
      completeFunction: hidebg2
    });
  });

  function hidebg2(){
    $("#bg2").fadeOut(2000);
    $("#button1").fadeOut();
    $("#button2").fadeIn(2000);
  }

  $("#button2").click(function(event){
    $("#stroke").eraser({
      size: 50,
      completeRatio: .2,
      completeFunction: hidestroke
    });
  });

  function hidestroke(){
    $("#stroke").fadeOut(2000);
    $("#button2").fadeOut();
    $("#button3").fadeIn(2000);
  }

  $("#button3").click(function(event){
    $("#blue").eraser({
      size: 50,
      completeRatio: .2,
      completeFunction: hideblue
    });
  });

  function hideblue(){
    $("#blue").fadeOut(2000);
    $("#button3").fadeOut();
    $("#button4").fadeIn(2000);
  }

  $("#button4").click(function(event){
    $("#lightp").eraser({
      size: 50,
      completeRatio: .2,
      completeFunction: hidelight
    });
  });

  function hidelight(){
    $("#lightp").fadeOut(2000);
    $("#button4").fadeOut();
    $("#button5").fadeIn(2000);
  }

  $("#button5").click(function(event){
    $("#darkp").eraser({
      size: 50,
      completeRatio: .2,
      completeFunction: hidedark
    });
  });

  function hidedark(){
    $("#darkp").fadeOut(2000);
    $("#button5").fadeOut();
  }

  setTimeout(function(){
    $("#text").fadeOut(1000);
  }, 4000);







})
