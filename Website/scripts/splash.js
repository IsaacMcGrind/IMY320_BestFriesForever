$( document ).ready(function() {

  if($(window).scrollTop()>0){
      /*$("#scrollButtonContainer").click(function(){
        $("scrollButtonLink").attr("");
        window.scrollTo(0,0);
      });*/
      $("scrollButtonLink").attr("href", "#toptop");
      $("#scrollButtonText").html("Scroll to top");
      $("#scrollButtonImage").css({ 'transform' : 'rotate(180deg)' });
  }else{
    $("scrollButtonLink").attr("href", "#showreels");
    $("#scrollButtonText").html("Read more");
    $("#scrollButtonImage").css({ 'transform' : 'rotate(0deg)' });
  }

  $(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()>0){
        /*$("#scrollButtonContainer").click(function(){
          $("scrollButtonLink").attr("");
          window.scrollTo(0,0);
        });*/
        $("#scrollButtonLink").attr("href", "#toptop");
        $("#scrollButtonText").html("Scroll to top");
        $("#scrollButtonImage").css({ 'transform' : 'rotate(180deg)' });
    }else{
      $("#scrollButtonLink").attr("href", "#showreels");
      $("#scrollButtonText").html("Read more");
      $("#scrollButtonImage").css({ 'transform' : 'rotate(0deg)' });
    }
  });
});

});
