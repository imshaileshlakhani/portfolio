$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('#header').addClass("sticky");
        }else{
            $('#header').removeClass("sticky");
        }
    });

    $('.menu-btn').click(function(){
        $('.navbar ul').toggleClass('show');
        $('.menu-btn i').toggleClass('active');
        // $('.menu-btn').find('i').removeClass('fa-bars');
        // $('.menu-btn').find('i').addClass('fa-times');
    });
    
});

// Parallax effect
// min-width
// max-width
// nth-child
// navbar
// sidebar
// display - block,inline-block,none,flex
// position - fixed
// .navbar ul li:hover a{}
// add class by js #header.stiky
// flex-direction - row-revers
// ::after ::before
// flex-basis
