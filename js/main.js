var picture_showing = false; 
function mytiming(frame){
  if(!picture_showing && frame > 0.8){
    $(".bg-img").fadeTo( "slow" , 1);
  }
  return frame;
}

$(window).load(function(){

});
