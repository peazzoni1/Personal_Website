
    $("#MyNavbar a").on('click', function (event) {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        });
    $(function() { 
     $('.grid').imagesLoaded(function() { 
          $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true,
         
        });
     }); 
    $('.grid-item').mouseover(function() {
        $(this).find(".app-title").css('visibility','hidden');
        $(this).find(".app-desc").css({'visibility':'visible'});
        
        $(this).children("a").children("img").css({'opacity': '.4'});
    });
    
     $('.grid-item').mouseout(function() {
        $(this).find(".app-desc").css('visibility', 'hidden');
        $(this).find(".app-title").css({'visibility':'visible'});
       $(this).children("a").children("img").css({'opacity': '1'});
        });
    });
    var vid = $("#video"); 
    function setPlaySpeed() { 
    vid.playbackRate = 4;
    } 
