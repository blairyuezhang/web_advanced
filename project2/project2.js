$(document).ready(function(){
    $( "#a" ).click(function() {
        $("#b").show();
        functionb();
        
    });
    
    $( "#b" ).click(function() {
        $("#c").show();
        functionc();
        
    });
    
    $( "#c" ).click(function() {
        $("#d").show();
        functiond();
        
    });
    
    $( "#d" ).click(function() {
        $("#e").show();
        functione();
        
    });
    
    $( "#e" ).click(function() {
        $("#f").show();
        functionf();
        
    });
    
    $( "#f" ).click(function() {
        $("#g").show();
        functiong();
        
    });
    
    $( "#g" ).click(function() {
        $("#h").show();
        functionh();
        
    });
    
    $( "#h" ).click(function() {
        $("#heart").show();
        functionheart();
        
    });
  
  
  
  var face = ["😎","😳😷😷😳","🤗🤚🏽🤚🏽🤗","✨🔥🔥✨","🍒🍊🍑🍓","📍📝📝📝📍","😍","🙀"]
  
  var sign = ["👉🏽","💓","🌱🌸🌸🌱","🔥❤️❤️🔥","🍝🍔🍟🍖","📝❤️❤️❤️📝","🤙🏽","❤️","❤️💛❣️💙❤️"]
  
  function functiona(){ 
    for (var i=0; i<1; i++){
        var facesign = "";
        for (var x=0; x<4; x++){
          facesign += face[0]
        }
     
        var output = "";
        for (var z=0; z<4; z++){
          output += sign[0]
        }
    }
    output = facesign + "\n" + output + "\n" + facesign
    console.log(output);
  }
 
   function functionb(){ 
    for (var i=0; i<1; i++){
        var facesign = "";
        for (var x=0; x<3; x++){
          facesign += face[1]
        }
     
        var output = "";
        for (var z=0; z<12; z++){
          output += sign[1]
        }
    }
    output = facesign + "\n" + output+ "\n" + output+ "\n" + output+ "\n" + output + "\n" + facesign
    console.log(output);
  }
  
   function functionc(){ 
    for (var i=0; i<1; i++){
        var facesign = "";
        for (var x=0; x<1; x++){
          facesign += face[2]
        }
     
        var output = "";
        for (var z=0; z<1; z++){
          output += sign[2]
        }
    }
    output = facesign + "\n" + output + "\n" + facesign
    console.log(output);
  }
 
  function functiond(){ 
    for (var i=0; i<1; i++){
        var facesign = "";
        for (var x=0; x<3; x++){
          facesign += face[3]
        }
     
        var output = "";
        for (var z=0; z<3; z++){
          output += sign[3]
        }
    }
    output = facesign + "\n" + output + "\n" + facesign
    console.log(output);
  }
  
  function functione(){ 
    for (var i=0; i<1; i++){
        var facesign = "";
        for (var x=0; x<3; x++){
          facesign += face[4]
        }
     
        var output = "";
        for (var z=0; z<3; z++){
          output += sign[4]
        }
    }
    output = facesign + "\n" + output + "\n" + output + "\n" + facesign
    console.log(output);
  }
  
  function functionf(){ 
    for (var i=0; i<1; i++){
        var facesign = "";
        for (var x=0; x<1; x++){
          facesign += face[5]
        }
     
        var output = "";
        for (var z=0; z<1; z++){
          output += sign[5]
        }
    }
    output = facesign + "\n" + output + "\n" + facesign
    console.log(output);
  }
  
  function functiong(){ 
    for (var i=0; i<2; i++){
        var facesign = "";
        for (var x=0; x<12; x++){
          facesign += face[6]
        }
     
        var output = "";
        for (var z=0; z<12; z++){
          output += sign[6]
        }
    }
    output = facesign + "\n" + facesign + "\n"+ facesign + "\n"+ output + "\n" + output + "\n" + output + "\n" + output + "\n" + facesign + "\n"+ facesign + "\n"+ facesign
    console.log(output);
  }
  
  function functionh(){ 
    for (var i=0; i<13; i++){
        var facesign = "";
        for (var x=0; x<12; x++){
          facesign += face[7]
        }
     
        var output = "";
        for (var z=0; z<12; z++){
          output += sign[7]
        }
    }
    output = facesign + "\n" + facesign + "\n"+ facesign + "\n"+ output + "\n" + output + "\n" + output + "\n" + output + "\n" + facesign + "\n"+ facesign + "\n"+ facesign
    console.log(output);
  }
  
  var time = 0;
  function functionheart(){
      for (var i=0; i<40; i++){
          setTimeout(function(){
              var output ="";
          for (var x=0; x<12; x++){
              output+= sign[8]
          }
          console.log(output);
          },time)
          time += 500;
      }
  }
  
  
  
  setTimeout(function(){
      functiona();
  },1000);
  
  
  
  
  
  
  
    
})