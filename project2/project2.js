for (var line=0; line < 7; line ++){
    
    var hearttime=0
    var output = ""
    for (var num = 0; num < 117; num ++){
       setTimeout(function(){ 
        if(num % 2){
            output = output + "❤️" + ","
        }
       
        console.log(output);
       }, hearttime)
       hearttime+=100
    }
    

}

var heart = ["❤️"]