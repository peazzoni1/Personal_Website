//Scroll to each section 
    $("#MyNavbar a").on('click', function (event) {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        });

//display "About" blurb 

                   
//load Masrony grid 
    $(function() {
     $('.grid').imagesLoaded(function() {
          $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true,

        });
     });
        
//hide app name and show description on mouseover
    $('.grid-item').mouseover(function() {
        $(this).find(".app-title").css('visibility','hidden');
        $(this).find(".app-tag").css({'visibility':'hidden'});
        $(this).find(".app-desc").css({'visibility':'visible'});
        $(this).children("a").children("img").css({'opacity': '.4'});
    });
        
//hide description and show name again 
     $('.grid-item').mouseout(function() {
        $(this).find(".app-desc").css('visibility', 'hidden');
        $(this).find(".app-tag").css({'visibility':'visible'});
        $(this).find(".app-title").css({'visibility':'visible'});
        $(this).children("a").children("img").css({'opacity': '1'});
        });
    });
    var vid = $("#video");
    function setPlaySpeed() {
    vid.playbackRate = 4;
    }
