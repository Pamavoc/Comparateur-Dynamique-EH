let resetBtn = document.body.querySelector('reset-button');
            
            function UnSelectAll() {
                    let items = document.querySelector('filter');
                    for (var i = 0; i < items.length; i++) {
                        if (items[i].type == 'checkbox')
                            items[i].checked = false;
                    }
            }
            
            
    
            if(resetBtn) {
                resetBtn.addEventListener('click', UnSelectAll());
            }
            
            if(window.screen.width < 1200 ){

                $(window).scroll(function () {
                    if ($(this).scrollTop() > 680) {
                        $(".reset-button a").css({"backgroundColor": "#0067BD", "color" : "white"});
                        $(".reset-button a").html('Remonter en haut');
                        $(".reset-button a").attr("href", "#comparateur");
                        
                        $('.filter-container').css({"display" : "none"});
                        $('.filter').css({"height" : "45px", "backgroundColor" : "transparent"});
                        $('.reset-button').css({"height" : "100%"});
                        $('.reset-button a').css({"height" : "45px", "width" : "100%"});
                    

                    } else {
                        
                        $('.filter').css({"height" : "150px", "backgroundColor" : "white"})
                        $('.filter-container').css({"display" : "flex"})
                        $('.reset-button').css({"height" : "50%"});
                        $('.reset-button a').css({"height" : "40px", "width" : "230px"})
                        $(".reset-button a").css({"backgroundColor": "#FF8F8F",  "color" : "#203248"});
                        $(".reset-button a").html('Reinitialiser les filtres')
                        $(".reset-button a").attr("href", "");
                    }



                });
            }



    $(document).ready(function () {
        $('html, body').animate({
            scrollTop: $("#comparateur").offset().top
        }, 200);
    });




$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 1200) {
      $('.arrow svg').fadeIn();
    } else {
      $('.arrow svg').fadeOut();
    }
});