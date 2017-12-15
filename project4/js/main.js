$(document).ready(function(){



  newyork();
  tokyo();
  copenhagen();
  vancouver();
  beijing();
  london();
  la();
  paris();

  $("#pearl1").click(function () {
    $("body").css({"background-image":"linear-gradient(-68deg, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)"});
    $(".typewrite").fadeOut(0);
    $("#thoughtsNY").fadeIn();
  })

  $("#pearl2").click(function () {
    $("body").css({"background-image":"linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)"});
    $(".typewrite").fadeOut(0);
    $("#thoughtsJP").fadeIn();
  })

  $("#pearl3").click(function () {
    $("body").css({"background-image":"linear-gradient(137deg, #fa709a 0%, #fee140 100%)"});
    $(".typewrite").fadeOut(0);
    $("#thoughtsDM").fadeIn();
  })

  $("#pearl4").click(function () {
    $("body").css({"background-image":"linear-gradient(45deg, #f43b47 0%, #453a94 100%)"});
    $(".typewrite").fadeOut(0);
    $("#thoughtsVC").fadeIn();
  })

  $("#pearl5").click(function () {
    $("body").css({"background-image":"linear-gradient(45deg, #ee9ca7 0%, #ffdde1 100%)"});
    $(".typewrite").fadeOut(0);
    $("#thoughtsBJ").fadeIn();
  })

  $("#pearl6").click(function () {
    $("body").css({"background-image":"linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)"});
    $(".typewrite").fadeOut(0);
    $("#thoughtsUK").fadeIn();
  })

  $("#pearl7").click(function () {
    $("body").css({"background-image":"linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)"});
    $(".typewrite").fadeOut(0);
    $("#thoughtsLA").fadeIn();
  })

  $("#pearl8").click(function () {
    $("body").css({"background-image":"linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%)"});
    $(".typewrite").fadeOut(0);
    $("#thoughtsLA").fadeIn();
  })

  playmusic();








});

function hideBlair() {
  $("#blair").fadeOut();
}


function makeNewPosition(){

    var h = $(window).height() - 50;
    var w = $(window).width() - 100;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

}

function newyork(){
  var location = "10038";

  $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json', function (data) {


          console.log('NYC wind speed '+data.query.results.channel.wind.speed);

          var nyc = 50000/data.query.results.channel.wind.speed;

          var newq = makeNewPosition();
          var speed = nyc;

          $('#pearl1').animate({ left: newq[0]}, speed, function(){
            newyork();
          });
      }
  )
}

function tokyo(){
  var location = "tokyo";

  $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json', function (data) {

          console.log('Tokyo wind speed '+data.query.results.channel.wind.speed);

          var tokyos = 50000/data.query.results.channel.wind.speed;

          var newq = makeNewPosition();
          var speed = tokyos;

          $('#pearl2').animate({ left: newq[0]}, speed, function(){
            tokyo();
          });
      }
  )
}

function copenhagen(){
  var location = "copenhagen";

  $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json', function (data) {

          console.log('Copenhagen wind speed '+data.query.results.channel.wind.speed);

          var copenhagens = 50000/data.query.results.channel.wind.speed;

          var newq = makeNewPosition();
          var speed = copenhagens;

          $('#pearl3').animate({ left: newq[1]}, speed, function(){
            copenhagen();
          });
      }
  )
}

function vancouver(){
  var location = "vancouver";

  $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json', function (data) {

          console.log('Vancouver wind speed '+data.query.results.channel.wind.speed);

          var vancouvers = 50000/data.query.results.channel.wind.speed;

          var newq = makeNewPosition();
          var speed = vancouvers;

          $('#pearl4').animate({ left: newq[1]}, speed, function(){
            vancouver();
          });
      }
  )
}

function beijing(){
  var location = "beijing";

  $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json', function (data) {

          console.log('Beijing wind speed '+data.query.results.channel.wind.speed);

          var beijings = 50000/data.query.results.channel.wind.speed;

          var newq = makeNewPosition();
          var speed = beijings;

          $('#pearl5').animate({ left: newq[0]}, speed, function(){
            beijing();
          });
      }
  )
}

function london(){
  var location = "london";

  $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json', function (data) {

          console.log('London wind speed '+data.query.results.channel.wind.speed);

          var londons = 50000/data.query.results.channel.wind.speed;

          var newq = makeNewPosition();
          var speed = londons;

          $('#pearl6').animate({ left: newq[0]}, speed, function(){
            london();
          });
      }
  )
}

function la(){
  var location = "los angelas";

  $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json', function (data) {

          console.log('LA wind speed '+data.query.results.channel.wind.speed);

          var las = 50000/data.query.results.channel.wind.speed;

          var newq = makeNewPosition();
          var speed = las;

          $('#pearl7').animate({ left: newq[0]}, speed, function(){
            la();
          });
      }
  )
}

function paris(){
  var location = "paris";

  $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json', function (data) {

          console.log('Paris wind speed '+data.query.results.channel.wind.speed);

          var pariss = 50000/data.query.results.channel.wind.speed;

          var newq = makeNewPosition();
          var speed = pariss;

          $('#pearl8').animate({ left: newq[1]}, speed, function(){
            paris();
          });
      }
  )
}



var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };


  function playmusic() {
  var music = document.getElementById("song");
  music.play();
}
