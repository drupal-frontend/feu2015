

$(window).load(function(){
  new Vivus('my-svg', {
    type: 'delayed',
    duration: 120,
    animTimingFunction: Vivus.EASE
  });


  setTimeout(function(){ 
    $(".bg-img").fadeTo( "slow" , 1);
   }, 3000);
  
});