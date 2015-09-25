var picture_showing = false; 
function mytiming(frame){
  if(!picture_showing && frame > 0.8){
    $(".bg-img").fadeTo( "slow" , 1);
  }
  return frame;
}

$(window).load(function(){
  $("#my-svg").css('opacity', '1');
  new Vivus('my-svg', {
    start: 'autostart',
    type: 'delayed',
    duration: 120,
    animTimingFunction: mytiming
  }, function(){
    $(".svg-container").fadeTo( "slow" , 0);
  });
});
