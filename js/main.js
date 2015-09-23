new Vivus('my-svg', {
    type: 'delayed',
    duration: 100,
    animTimingFunction: Vivus.EASE
});


setTimeout(function(){ 
  $(".bg-img").fadeTo( "slow" , 1);
 }, 2000);