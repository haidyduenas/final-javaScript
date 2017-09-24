// toggle class scroll 
$(window).scroll(function() {
    if($(this).scrollTop() > 30)
    {
        $('.navbar-trans').addClass('afterscroll');
    } else
    {
        $('.navbar-trans').removeClass('afterscroll');
    }  

});
  