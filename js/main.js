new Vivus('my-svg', {
    type: 'delayed',
    duration: 200,
    animTimingFunction: Vivus.EASE
});


setTimeout(function(){ 
  $(".bg-img").fadeTo( "slow" , 1);
 }, 2000);