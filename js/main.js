

$(window).load(function(){
  new Vivus('my-svg', {
    start: 'autostart',
    type: 'delayed',
    duration: 120,
    animTimingFunction: Vivus.EASE
  });


  setTimeout(function(){
    $(".bg-img").fadeTo( "slow" , 1);
   }, 3000);
  
});