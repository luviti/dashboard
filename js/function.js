$(function(){
  var windowWidth = $(window).width();
  if(windowWidth <= 768){
    console.log(windowWidth);
    $('.nome-usuario h2').click(function(){
      var el = $('.sidebar');
      if(el.is(':visible'))
      {
        el.hide();
        $('.main-content').css('left','0px');
      }else{
        el.show();
        $('.main-content').css('left','300px');
      }
    });
    $(window).resize(function(){
    	windowWidth = $(window).width();
    })
  }
});

