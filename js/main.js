$(window).load(function(){
  $("#my-svg").css('opacity', '1');
  new Vivus('my-svg', {
    start: 'autostart',
    type: 'delayed',
    duration: 120,
    animTimingFunction: Vivus.EASE
  }, function(){
    $(".svg-container").fadeTo( "slow" , 0);
  });

  setTimeout(function(){
    $(".bg-img").fadeTo( "slow" , 1);
   }, 3000); 
});