var coffee = bodymovin.loadAnimation({
  container: document.getElementById('coffee'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'asset/coffee/data.json'
})

var coldbrew = bodymovin.loadAnimation({
  container: document.getElementById('coldbrew'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'asset/cb/data.json'
})

var icelatte = bodymovin.loadAnimation({
  container: document.getElementById('icelatte'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'asset/icelatte/data.json'
})

var cbl = bodymovin.loadAnimation({
  container: document.getElementById('cbl'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'asset/cbl/data.json'
})

$(document).ready(function(){

  $('#coldbrewbutton').click(function(){
    coldbrew.play();
    $('.fade').fadeOut();
    $('#coldbrew').fadeIn();

  })

  $('#icelattebutton').click(function(){
    icelatte.play();
    $('.fade').fadeOut();
    $('#icelatte').fadeIn();
  })

  $('#cblbutton').click(function(){
    cbl.play();
    $('.fade').fadeOut();
    $('#cbl').fadeIn();
  })


  var count = 1;

  if(Cookies.get('currentStage')){

     var valueFromCookie = Cookies.get('currentStage')

     console.log("valueFromCookie: ", valueFromCookie)

     valueFromCookie++;

     $('#counttime').html('Hi x '+ valueFromCookie);

    Cookies.set('currentStage', valueFromCookie, {expires: 30})

    // var newcount = new Array(100);
    //
    // for (var i = 1; i < 100; i++) {
    //
    //    newcount[i] = count + i;
    //
    //   $('#counttime').append('Hi x '+ newcount[i]);
    //
    // }
    // Cookies.set('currentStage', newcount, {expires: 30});

  }else{

    $('#counttime').html('Hi');
    console.log("count: ", count)
    Cookies.set('currentStage', count, {expires: 30});

    console.log("cookie: ", Cookies.get('currentStage'))

  }


})
