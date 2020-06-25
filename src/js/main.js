$(document).ready(function() {

    new WOW().init();

    // Animate elements

    $(".section-services").waypoint(function(direction) {
        $(".service-box").toggleClass('animated slideInUp');
    }, {
        offset: "80%"
    });

    $('.section-thoughts').waypoint(function(direction) {
        $('.thought-box').toggleClass('animated fadeInDown');
    }, {
        offset: "85%"
    });

    $('.section-shop').waypoint(function(direction) {
        $('.shop-box').each(function() {
            $(this).toggleClass('animated rotateInUpRight');
        })}, {
        offset: "90%"
    });

    $('.section-contact').waypoint(function(direction) {
        $('.section-contact button').toggleClass('animated bounceIn');
    }, {
        offset: "30%"
    });

    // Show arrows

    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('.arrow-box').fadeIn();
        } else {
            $('.arrow-box').fadeOut();
        }
    });

    // Back to the top / Go to the bottom

    $('.top').click(function(){
        $('html, body').animate({scrollTop : 0}, 100);
        return false;
    });

    $('.down').click(function(){
        $('html, body').animate({scrollTop: $(document).height()}, 100);
        $('.nav-link').removeClass('active');
        return false;
    });

    // Prevent default

    $("a[href='#']").click(function(e) {
        e.preventDefault();
    });

    // Show hamburger menu

    $('.nav-burger').on('click', function() {
        $('.navbar').toggleClass('open');
    });

    // Close hamburger menu
    $('.nav-link').click(function() {
        $('.navbar').removeClass('open');
    });

    // Add class 'active' to navigation
    $('.nav-link').click(function() {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });

    // Change active item to HOME   
    $(window).scroll(function(){
        if ($(this).scrollTop() === 0) {
            $('.nav-link').removeClass('active');
            $('.nav-link:first').addClass('active');
        } 
    });
});                           


