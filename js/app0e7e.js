document.addEventListener('DOMContentLoaded',function(){
    if($('.home-slider').length > 0) {
        $('.home-slider').slick({
            dots: true,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 4500,
        });
    }

    if( $(".countdown-presale").length > 0 ){
      countdown_event($(".countdown-presale"));
   }
    
    /*pin header*/
    window.onscroll = function() {stickyHeader()};
    var navbar = document.getElementById("header");
    var sticky = navbar.offsetTop;

    function stickyHeader() {
        if (window.pageYOffset > sticky + 80) {
            navbar.classList.add("stuck")
        } else {
            navbar.classList.remove("stuck");
        }
    }


    $(".mobile-nav").click(function(e){
        e.preventDefault();

        if( $(this).hasClass("open") ) {
            $(".mobile-menu").removeClass("active");
            $(this).removeClass("open");
            $("body").removeClass("menu-open");
        }else{
            $(".mobile-menu").addClass("active");
            $(this).addClass("open");
            $("body").addClass("menu-open");
        }
    });

    $(".mobile-menu-close").click(function(e){
        e.preventDefault();
        $(".mobile-menu").removeClass("active");
    });

    $(".nav-item a").click(function(e){
        $(".mobile-menu").removeClass("active");
        $(".mobile-nav").removeClass("open");
        $("body").removeClass("menu-open");
    });


    $(function() {
        $('a[href*=\\#]:not([href=\\#])').on('click', function() {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top -80
                }, 0);
                return false;
            }
        });
    });
});

function call_noti(status, title, description, button){
    $("#modal-title").html(title);
    $("#modal-description").html(description);
    $("#modal-button").html(button);
    $("#noti .modal-dialog").addClass(status);
    $("#noti").modal("show");
}

function countdown_event(el) {
   var date = el.data("date");
   var countDownDate = new Date('24 September 2022 14:00 UTC');
   //var countDownDate = new Date(date).getTime();
   console.log(countDownDate);

   // Update the count down every 1 second
   var x = setInterval(function() {
     // Get today's date and time
     var now = new Date().getTime();
     // Find the distance between now and the count down date
     var distance = countDownDate - now;
     // Time calculations for days, hours, minutes and seconds
     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
     // Display the result in the element with id="demo"
     //document.getElementById("demo").innerHTML = days + "d " + hours + "h "
     //+ minutes + "m " + seconds + "s ";

     // If the count down is finished, write some text
     if (distance < 0) {
         clearInterval(x);
         return;
     }

     el.find(".day number").html(days);
     el.find(".hour number").html(hours);
     el.find(".min number").html(minutes);
     el.find(".sec number").html(seconds);

     
   }, 1000);
}