$(function () {

    "use strict";

    //===== Prealoder

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });

    //===== Prealoder

    $('.searchToggle').on('click', function (event) {
        $('.navigation_search').slideToggle();
    });


    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".bdrop-navigation-area").removeClass("sticky");
            $(".bdrop-navigation-transparent .bdrop-logo img").attr("src", "assets/images/logo-2.png");
        } else {
            $(".bdrop-navigation-area").addClass("sticky");
            $(".bdrop-navigation-transparent .bdrop-logo img").attr("src", "assets/images/logo.png");
        }
    });


    //=====  Theme Menu 

    var menu = $("#mega-menu-holder");
    if (menu.length) {
        menu.slimmenu({
            resizeWidth: '991',
            animSpeed: 'medium',
            collapserTitle: '',
            indentChildren: true,
            expandIcon: '<i class="fa fa-angle-down"></i>',
            collapseIcon: '<i class="fa fa-angle-up"></i>',
        });
    }

    
    //===== Slider
    
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.bdrop-single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.bdrop-single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        
        BasicSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $('.slider-counter')
                .html('<span class="current-slide">0' + i + '</span><span class="total-slide">0' + slick.slideCount + '</span>');
        });
        
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 10000,
            dots: true,
            fade: true,
            pauseOnHover: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        dots: false,
                        arrows: false
                    }
                }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();
    
    
    //=====  Slick Project

    $('.bdrop-project-image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.bdrop-project-content'
    });
    
    $('.bdrop-project-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.bdrop-project-image',
        dots: false,
        arrows: true,
        prevArrow: '<span class="prev"><i class="flaticon-left-arrow"></i></span>',
        nextArrow: '<span class="next">Next</span>',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false
                }
            }
        ]
    });


    //=====  Slick Testimonial
    
    $('.testimonial-active').slick({
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<span class="prev"><i class="flaticon-left-arrow"></i></span>',
        nextArrow: '<span class="next">Next</span>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });


    //=====  Slick News
    
    $('.news-active').slick({
        dots: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<span class="prev"><i class="flaticon-left-arrow"></i></span>',
        nextArrow: '<span class="next">Next</span>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });


    //=====  Slick What We Do
    
    $('.bdrop-what-we-do-active').slick({
        dots: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<span class="prev"><i class="flaticon-left-arrow"></i></span>',
        nextArrow: '<span class="next">Next</span>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });


    //=====  Slick Project 2
    
    $('.bdrop-project-items-active').slick({
        dots: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<span class="prev"><i class="flaticon-left-arrow"></i></span>',
        nextArrow: '<span class="next">Next</span>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });


    //=====  Slick Project 2
    
    $('.bdrop-project-active-3').slick({
        dots: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<span class="prev"><i class="flaticon-left-arrow"></i></span>',
        nextArrow: '<span class="next">Next</span>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });



    //=====  Slick Instagram
    
    $('.instagram-active').slick({
        dots: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 7,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
              }
            }
        ]
    });


    //====== Magnific Popup

    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });


    //===== Magnific Popup

    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    //===== 
    
    $('.bdrop-counter').counterUp({
        delay: 10,
        time: 2000,
    });
    
    
    //===== 









});
