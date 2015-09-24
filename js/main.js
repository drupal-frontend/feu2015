$(window).load(function(){
  $("#my-svg").css('opacity', '1');
  new Vivus('my-svg', {
    start: 'autostart',
    type: 'delayed',
    duration: 120,
    animTimingFunction: Vivus.EASE,
    onReady: function (myVivus) {
      // Start timeout on ready, so every browser renders at same time.
      setTimeout(function(){
        $(".bg-img").fadeTo( "slow" , 1);
      }, 1500);
    }
  }, function(){
    $(".svg-container").fadeTo( "slow" , 0);
  });


});