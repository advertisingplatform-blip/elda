$(document).ready(function () {
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: false       // trigger animations on mobile devices (true is default)
    });
    wow.init();

    $(document).on('click','.nav-btn',function(){
        var submenu = $(this).data('menu');
        $('.mmenu-submenu').hide();
        $(submenu).show();
        $('.mmenu-overlay').toggleClass('mmenu-overlay-hidden');
    });

    $('#booking-btn').click(function(e){
        e.preventDefault();
        $('.mmenu-submenu').hide();
        $('.mmenu-booking').show();
        $('.mmenu-footer').hide();
    });

    /*
    $('.header-telephone span').click(function(e){
        e.preventDefault();
        var submenu = $('.mmenu-phones');
        $('.mmenu-submenu').hide();
        $(submenu).show();
        $('.mmenu-overlay').toggleClass('mmenu-overlay-hidden');
    });
    */

    $('#book-now').click(function(e){
        e.preventDefault();
        var submenu = $(this).data('menu');
        $('.mmenu-submenu').hide();
        $(submenu).show();
        if(submenu=='.mmenu-booking') {
            $('.mmenu-footer').hide()
        }else{
            $('.mmenu-footer').show();
        }
        $('.mmenu-overlay').toggleClass('mmenu-overlay-hidden');
    });

    $('#book-now1').click(function(e){
        e.preventDefault();
        var submenu = $(this).data('menu');
        $('.mmenu-submenu').hide();
        $(submenu).show();
        if(submenu=='.mmenu-booking') {
            $('.mmenu-footer').hide()
        }else{
            $('.mmenu-footer').show();
        }
        $('.mmenu-overlay').toggleClass('mmenu-overlay-hidden');
    });

    $('#search-form-toggle1').click(function(){
        var submenu = $(this).data('menu');
        $('.mmenu-submenu').hide();
        $(submenu).show();
        $('.mmenu-footer').show();
        $('.mmenu-overlay').toggleClass('mmenu-overlay-hidden');
    });

    $(document).on('click','.mmenu-toggle',function(){
        var submenu = $(this).data('search');
        $('.mmenu-submenu').hide();
        $(submenu).show();
        if(submenu=='.mmenu-booking') {
            $('.mmenu-footer').hide()
        }else{
            $('.mmenu-footer').show();
        }
        $('.mmenu-overlay').toggleClass('mmenu-overlay-hidden');
    });

    $('.mmenu-main > li > a').click(function(e){
        e.preventDefault();
        var link = $(this);
        if(link.next().length){
            link.next().slideToggle();
            link.parent().siblings().slideToggle();
            link.toggleClass('mmenu-next-ul-open');
        }else{
            location.href = link.attr('href');
        }
    });

    if (screen.width < 767) {
        $('.contact-content-inner-desktop').hide();
        $('.contact-content-inner-mobile').show();
    }
    else {
        $('.contact-content-inner-desktop').show();
        $('.contact-content-inner-mobile').hide();
    }

    $('.mmenu-main > li > ul > li > a').click(function(e){
        e.preventDefault();
        var link = $(this);
        if(link.next().length){
            link.next().slideToggle();
            link.toggleClass('mmenu-next-ul-open');
        }else{
            location.href = link.attr('href');
        }
    });


    $('.logos-slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    slidesToShow: 2
                }
            }
        ]
    });

    var logos_width = 0;
    $('.logo-item').each(function() {
        logos_width += $(this).outerWidth( true );
    });

    if(logos_width < $('.section-logos').width()) {
        $('.section-logos').addClass('not-active');
    }
    else {
        $('.section-logos').removeClass('not-active');
    }

    $('.home-pods').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 1,
        //autoplay: true,
        //autoplaySpeed: 6000,
        prevArrow: '<button type="button" class="slick-prev slick-simple-angle"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next slick-simple-angle"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.rel-treatments-inside').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 1,
        //autoplay: true,
        //autoplaySpeed: 6000,
        prevArrow: '<button type="button" class="slick-prev slick-simple-angle"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next slick-simple-angle"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 768,
                settings: "unslick"
            }
        ]
    });

    $('.collapse-offer').click(function(){
        $(this).parents('.special-offer').toggleClass('active');
    });

    $('a[href^="#"]').click(function (e) {
        e.preventDefault();
        var link = $(this);
        var target = $(link.attr('href'));
        if (target.length > 0) {
            var offset = ($(window).width() < 768) ? 37 : 67;

            $('html,body').animate({
                scrollTop: target.offset().top - offset
            }, 1000);

            setTimeout(function () {
                if(link.hasClass('move-to-table')){
                    //target.find('.faq-question').trigger('click');
                }
            }, 1000);
        }
    });
    if(window.location.hash){
        setTimeout(function () {
            var target = $(window.location.hash+'-hash');
            var offset = ($(window).width() < 768) ? 37 : 67;

            $('html,body').animate({
                scrollTop: target.offset().top - offset
            }, 1000);
        }, 500);
    }

    $('.height').filter(function() {
        return $(this).children('div').height() > 215;
    }).parents('.height-outer').addClass('large');

    if (screen.width < 768) {
        $(document).on('click','.sb-close',function() {
            $(this).parents('#smartbanner').css('bottom','-50px');
        });
    }

    $('.footer-arrow').click(function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
    });

    if ($('body').hasClass('page-template-template-reviews')) {
        $('.page-template-template-reviews .readmore').click(function(){
            $(this).parents('.review-quote').toggleClass('active');
            if($(this).parents().hasClass('active')){
                $(this).find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up');
            }
            else {
                $(this).find('.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
                var offset = ($(window).width() < 768) ? 37 : 67;
                $('html,body').animate({
                    scrollTop: $(this).parents().parents().offset().top - offset
                }, 1000);
            }
        });
    }
    else if ($('body').hasClass('page-template-template-contact')) {
        $('.readmore').click(function() {
            $(this).parents('.section').toggleClass('active');
            if ($('.section').hasClass('active')) {
                $(this).find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up');
            }
            else {
                $(this).find('.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
                var offset = ($(window).width() < 768) ? 37 : 67;
                $('html,body').animate({
                    scrollTop: $(this).parents().offset().top - offset
                }, 1000);
            }
        });
    }
    else {
        $('.readmore').click(function(){
            $(this).parents('.review-quote').toggleClass('active');
            $(this).parents('.part-content-main').parents('.section').find('.part-content-main').toggleClass('active');
            $(this).parents('.part-content').parents('.section-treatment').find('.part-content').toggleClass('active');
            $(this).parents('.section-video').toggleClass('active');
            $(this).parents('.section-reviews').toggleClass('active');
            $(this).parents('.special-offer').toggleClass('active');
            $(this).parents('.section-content').toggleClass('active');
            $(this).parents('.section-home-content').toggleClass('active');
            $(this).parents('.section-tech').toggleClass('active');
            $(this).parents('.causes').toggleClass('active');
            $(this).parents('.preventions').toggleClass('active');
            if($(this).parents().hasClass('active')){
                $(this).find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up');
            }
            else {
                $(this).find('.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
                var offset = ($(window).width() < 768) ? 37 : 67;
                $('html,body').animate({
                    scrollTop: $(this).parents().offset().top - offset
                }, 1000);
            }
        });
    }
    $('.nav-btn').click(function(){
        $('.section-menu.ddown').toggleClass('active');
    });
    $('#search-form-toggle').click(function(){
        var form = $(this).parents('form.search-form');
        form.addClass('search-form-open');
        form.find('.search-input').focus();
    });

    /*
     if ($(window).width() < 992) {
     $('.search-form').click(function() {
     setTimeout(function(){
     if ($('.search-form').hasClass('search-form-open')) {
     $('.header-telephone').hide();
     }
     else {
     $('.header-telephone').show();
     }
     },1000);
     });
     }
     */

    /*
    $(document).on('blur','.search-input', function(){
        var form = $(this).parents('form.search-form');
        form.removeClass('search-form-open');
    });
    */

    $(".btn-video").click(function () {
        $.fancybox({
            'padding': 0,
            'autoScale': false,
            'transitionIn': 'none',
            'transitionOut': 'none',
            'title': this.title,
            'width': 680,
            'height': 495,
            'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
            'type': 'swf',
            'swf': {
                'wmode': 'transparent',
                'allowfullscreen': 'true'
            }
        });

        return false;
    });

    $(document).on('click','.btn-home-review', function(){
        var review = $(this).parents('.home-review');
        review.toggleClass('home-review-open');
    });

    $('#locate-postcode').click(function(e){
        e.preventDefault();

        var btn = $(this);
        var postcode = $('#input-postcode').val();

        btn.prop('disabled', true);
        $.post(window.location.protocol+'//'+window.location.hostname+'/wp-admin/admin-ajax.php', {
            'action': 'find_nearest_clinic',
            'postcode': postcode
        }, function(response) {
            $('#clinics-search-result-placeholder').html(response).show();
            $('#clinics-search-result').show();
            $('#clinics-search-field').hide();

            if (typeof ga === 'function') {
                ga('send', 'event', 'form', 'find-your-nearest-clinic');
            }

            setTimeout(function () {
                btn.prop('disabled', false);
            }, 500)
        });
    });
    $('#clinics-search-reinit').click(function (e){
        e.preventDefault();
        $('#clinics-search-result').hide();
        $('#clinics-search-field').show();
    });
    $('.clinics-map-pin').click(function(){
        $(this).parent().siblings().each(function () {
            $(this).find('.clinic-pin-pod').addClass('clinic-pin-pod-hidden');
        });
        $(this).find('.clinic-pin-pod').toggleClass('clinic-pin-pod-hidden');
    });

    $(".twentytwenty").twentytwenty({
        default_offset_pct: 0.5, // How much of the before image is visible when the page loads
        orientation: 'horizontal' // Orientation of the before and after images ('horizontal' or 'vertical')
    });

    $('#treatment-before-and-after').slick({
        arrows: true,
        dots: false,
        draggable: false,
        swipe: false,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev slick-simple-angle"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next slick-simple-angle"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.treatment-video-container').slick({
        arrows: true,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev slick-simple-angle"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next slick-simple-angle"><i class="fa fa-angle-right"></i></button>'
    });

    $('.home .home-hero').slick({
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000,
        dots: true
    });

    $('.section-header-bottom ul').slick({
        arrows: false,
        dots: false,
        draggable: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    if ($(window).width() < 768) {
        $(document).on('click', '.clinic-container h3', function (e) {
            e.preventDefault();
            $(this).parents('.clinic-container').toggleClass('active');
        });

        $('.footer-clinics-container a').click(function(e){
            e.preventDefault();
            $(this).toggleClass('active');
        });
        $('.footer-clinics-container a').children().not('.ftitle').click(function(e){
            e.stopPropagation();
        });
    }

    $(document).on('click', '.faq-question', function () {
        var answer = $(this).next('.faq-answer');
        var i = $(this).find('.faq-icon > i');
        $pricing = $(this).parents();
        if ($(answer).hasClass('hidden')) {
            $(this).addClass('active');
            $(this).parent().addClass('active');
            $(answer).hide().removeClass('hidden').slideDown('normal');
            if ($pricing.hasClass('section-pricing')) {
                if($(window).width() > 767) {
                    i.addClass('fa-minus').removeClass('fa-plus').addClass('faq-icon-open');
                }
                else {
                    i.addClass('fa-angle-up').removeClass('fa-angle-down').addClass('faq-icon-open');
                }
            }
            else {
                i.addClass('fa-minus').removeClass('fa-plus').addClass('faq-icon-open');
            }
        } else {
            $(this).removeClass('active');
            $(this).parent().removeClass('active');
            $(answer).slideUp('normal', function () {
                $(this).addClass('hidden');
            });

            if ($pricing.hasClass('section-pricing')) {
                if($(window).width() > 767) {
                    i.removeClass('fa-minus').addClass('fa-plus').removeClass('faq-icon-open');
                    var offset = ($(window).width() < 768) ? 37 : 67;
                    $('html,body').animate({
                        scrollTop: $(this).offset().top - offset
                    }, 1000);
                }
                else {
                    i.removeClass('fa-angle-up').addClass('fa-angle-down').removeClass('faq-icon-open');
                    var offset = ($(window).width() < 768) ? 37 : 67;
                    $('html,body').animate({
                        scrollTop: $(this).offset().top - offset
                    }, 1000);
                }
            }
            else {
                i.removeClass('fa-minus').addClass('fa-plus').removeClass('faq-icon-open');
            }
        }
    });

    $(document).on('click', '.tbl-close', function () {
        var answer = $(this).parents('.faq-answer');
        var i = $(this).parents('.faq-answer').prev('.faq-question').find('.faq-icon > i');
        $(this).parents('.faq-answer').prev('.faq-question').removeClass('active');
        $(this).parents('.faq-answer').parent().removeClass('active');
        $(answer).slideUp('normal', function () {
            $(this).addClass('hidden');
        });
        $pricing = $(this).parents();
        if ($pricing.hasClass('section-pricing')) {
            if($(window).width() > 767) {
                i.removeClass('fa-minus').addClass('fa-plus').removeClass('faq-icon-open');
                var offset = ($(window).width() < 768) ? 37 : 67;
                $('html,body').animate({
                    scrollTop: $(this).parents().parents().offset().top - offset
                }, 1000);
            }
            else {
                i.removeClass('fa-angle-up').addClass('fa-angle-down').removeClass('faq-icon-open');
                var offset = ($(window).width() < 768) ? 37 : 67;
                $('html,body').animate({
                    scrollTop: $(this).parents().parents().offset().top - offset
                }, 1000);
            }
        }
        else {
            i.removeClass('fa-minus').addClass('fa-plus').removeClass('faq-icon-open');
        }
    });

    $(document).on('click', '#months', function () {
        $('.widget .finance-widget .widget-body.key').show();
        $('.section-finance-calculator div.key').show();
        $('.section-finance-calculator .apply-container').show();
    });

    $('#finance-calculator .apply-btn').on('click', function (e) {
        var finance_amount = $('#finance-amount').val();
        var finance_months = $('#months').val();
        var finance_monthly_payment = $('#finance-monthly-payment').text();
        var finance_deposit = $('#finance-minimum-deposit').text();
        var finance_ammount = finance_amount + ' lei';
        $('#finance-amm').val(finance_ammount);
        $('#months-amount').val(finance_months + ' months');
        $('#monthly-payment').val(finance_monthly_payment + ' lei');
        $('#min-deposit').val(finance_deposit + ' lei');
        $('#finance').text(finance_ammount);
        $('#your-finance').val(finance_ammount);
        $('#your-monthly-payment').val(finance_monthly_payment + ' lei');
        $('#your-min-deposit').val(finance_deposit + ' lei');
        $(this).parents('.widget').find('p.widget-subtitle').hide();
        $(this).parents('.widget').find('.finance-widget > div:last-child').addClass('active');
        e.preventDefault();
        $(this).hide();
        $('#finance-calculator .step-1 > div:not(:last-child)').hide();
        $('#finance-calculator .step-2').show();
        $('.section .finance-widget').addClass('active');
    });

    $('#finance-calculator #months').change(function(){
        $('.widget .finance-widget .widget-body.key').show();
        $('.section-finance-calculator div.key').show();
        $('.section-finance-calculator .apply-container').show();

        var amount = $('#finance-amount').val();
        var months = $('#months option:selected').val();
        var months_val = parseInt(months);
        var deposit = amount*0.2;
        if(months_val == 24 || months_val == 36){
            var monthly = ((amount-deposit)*1.119)/months;
        } else {
            var monthly = (amount-deposit)/months;
        }

        $('#finance-monthly-payment').html(Math.ceil(monthly*100)/100);
        $('#finance-minimum-deposit').html(Math.ceil(deposit*100)/100);
    });

    $("#finance-slider").slider({
        value: 700,
        min: 700,
        max: 3000,
        step: 50,
        slide: function (event, ui) {
            $("#finance-amount").val(ui.value);
            $("#finance-calculator #months").trigger('change');
        },
        create: function( event, ui ) {
            $("#finance-amount").val(700);
            $("#finance-calculator #months").trigger('change');


            if ($(window).width() > 767) {
                $('.widget .finance-widget .widget-body.key').hide();
            }
            else {
                $('.widget .finance-widget .widget-body.key').hide();
                $('.section-finance-calculator div.key').hide();
                $('.section-finance-calculator .apply-container').hide();
            }
        }
    });

    setTimeout(function(){
        $('.ts-has-hover-hover').removeClass('ts-has-hover-hover');
    },1500);

    setTimeout(function(){
        $('.ts-has-hover-full-hover').removeClass('ts-has-hover-full-hover');
    },2000);

    setTimeout(function(){
        $('.treatment-hero-hover-hover').removeClass('treatment-hero-hover-hover');
    },1000);

    $('.expert-container .read-more a').on('click', function(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        var hiddenContent = $(this).closest('.expert-container').find('.hidden-content');
        var readMore = $(this);

        if ($(hiddenContent).hasClass('hidden')) {
            $(hiddenContent).hide().removeClass('hidden').slideDown(400);
            $(readMore).find('.fa').removeClass('fa-angle-down').addClass('fa-angle-up');
        } else {
            $(hiddenContent).slideUp(400, function() {
                $(this).addClass('hidden');
                $(readMore).find('.fa').removeClass('fa-angle-up').addClass('fa-angle-down');
            });
        }
    });

    $('.fileUpload1').change("click",function()
    {
        var imgVal = $('.fileUpload1 input').val();
        if(imgVal=='')
        {
            $(this).removeClass('not-empty');
        }
        else {
            $(this).addClass('not-empty');
            $(this).removeClass('empty');
        }
    });

    $('.wpcf7-submit').on('click', function() {
        if(!$('.fileUpload1').hasClass('not-empty')) {
            $('.fileUpload1').addClass('empty');
        }
    });

    $('.fileUpload2').change("click",function()
    {
        var imgVal = $('.fileUpload2 input').val();
        if(imgVal=='')
        {
            $(this).removeClass('not-empty');
        }
        else {
            $(this).addClass('not-empty');
            $(this).removeClass('empty');
        }
    });

    $('.wpcf7-submit').on('click', function() {
        if(!$('.fileUpload2').hasClass('not-empty')) {
            $('.fileUpload2').addClass('empty');
        }
    });

    $('span.wpcf7-list-item input').on('click', function() {
        if ($(this).val() == '1') {
            $('span.wpcf7-list-item').removeClass('active');
            $('span.wpcf7-list-item').eq(4).addClass('active');
        }
        if ($(this).val() == '2') {
            $('span.wpcf7-list-item').removeClass('active');
            $(this).addClass('active');
            $('span.wpcf7-list-item').eq(4).addClass('active');
            $('span.wpcf7-list-item').eq(3).addClass('active');
        }
        if ($(this).val() == '3') {
            $('span.wpcf7-list-item').removeClass('active');
            $(this).addClass('active');
            $('span.wpcf7-list-item').eq(4).addClass('active');
            $('span.wpcf7-list-item').eq(3).addClass('active');
            $('span.wpcf7-list-item').eq(2).addClass('active');
        }
        if ($(this).val() == '4') {
            $('span.wpcf7-list-item').removeClass('active');
            $(this).addClass('active');
            $('span.wpcf7-list-item').eq(4).addClass('active');
            $('span.wpcf7-list-item').eq(1).addClass('active');
            $('span.wpcf7-list-item').eq(2).addClass('active');
            $('span.wpcf7-list-item').eq(3).addClass('active');
        }
        if ($(this).val() == '5') {
            $('span.wpcf7-list-item').addClass('active');
        }
    });

    $('.review-short').each(function() {
        if ($(this).text().length <= 260) {
            $(this).hide();
            $(this).parents('div').next('.review-divider').hide();
            $(this).next('span.review-full').show();
        };
    });



    var page = 1;
    $('#load-more-btn').on('click', function(evt) {
        var btn = $(this);

        $(btn).prop('disabled', true).addClass('disabled');
        $.post(ajax.url, {'action':'load_posts', 'currentPage':page++, 'category_id':btn.data('category')}, function(response) {
            $(btn).prop('disabled', false).removeClass('disabled');
            if (! response)
                return;

            try {
                response = jQuery.parseJSON(response);
                if (! response.status)
                    throw response.data;

                if (response.data === 'NO_POSTS') {
                    $(btn).remove();
                    return;
                }

                $(btn).parent('.load-more-container').prev('.row').append(response.data);
            } catch (exc) {
                if (exc instanceof Error) {
                    //Log the actual error
                    console.log(exc);

                    //Change the exc to something less terrifying
                    exc = 'Something gone terribly wrong';
                }

                alert(exc);
            }
        });
    });
    $('#load-more-btn-1').on('click', function(evt) {
        var btn = $(this);

        $(btn).prop('disabled', true).addClass('disabled');
        $.post(ajax.url, {'action':'load_reviews', 'currentPage':page++}, function(response) {
            $(btn).prop('disabled', false).removeClass('disabled');
            if (! response)
                return;

            try {
                response = jQuery.parseJSON(response);
                if (! response.status)
                    throw response.data;

                if (response.data === 'NO_POSTS') {
                    $(btn).remove();
                    return;
                }

                $(btn).parent('.load-more-container').prev('.row').append(response.data);
            } catch (exc) {
                if (exc instanceof Error) {
                    //Log the actual error
                    console.log(exc);

                    //Change the exc to something less terrifying
                    exc = 'Something gone terribly wrong';
                }

                console.log(exc);
            }
        });
    });

    $('input.input-select').click(function(){
        $('ul.ul-select').toggleClass('active');
        return false;
    });

    $('ul.ul-select li a').click(function(){
        $('ul.ul-select').removeClass('active');
    });
    $(document).click(function() {
        $('ul.ul-select').removeClass('active');
    });



    $('.divider').click(function() {
        if($('.divider span').hasClass('divider-more')) {
            $('.single-clinic .the-content p').slice(4).slideDown(300);
            $(this).find('span').removeClass('divider-more').addClass('divider-less').html('READ LESS <i class="btn btn-green">_</i>');
        } else {
            $('.single-clinic .the-content p').slice(4).slideUp(300);
            $(this).find('span').removeClass('divider-less').addClass('divider-more').html('READ MORE <i class="btn btn-green">_</i>');
        }

    });

    if($(window).width() > 767) {
        $('.section-clinic .the-content').each(function () {
            var $this = $(this);
            if ($this.find('p').length < 5) {
                $('.divider').hide();
            }
        });

        $('.single-clinic .the-content p').slice(4).hide();

    }

    if ($(window).width() < 768) {
        $(".section-home-content").insertAfter(".section-pods");
        $(".single-clinic .section.section-clinic .col-md-8").insertAfter(".section.section-clinic .col-md-4");
        $('.page-template-template-contact .section-clinics-search').insertAfter('.section-clinics-archive');
    }

});

$(window).on('resize', function(){
    if($(window).width() < 768) {
        $(".section-home-content").insertAfter(".section-pods");
        $(".single-clinic .section.section-clinic .col-md-8").insertAfter(".section.section-clinic .col-md-4");
        $('.page-template-template-contact .section-clinics-search').insertAfter('.section-clinics-archive');
    }
    else {
        $(".section-pods").insertAfter(".section-home-content");
        $(".single-clinic .section.section-clinic .col-md-4").insertAfter(".section.section-clinic .col-md-8");
        $('.page-template-template-contact .section-clinics-archive').insertAfter('.section-clinics-search');
    }

    var logos_width = 0;
    $('.logo-item').each(function() {
        logos_width += $(this).outerWidth( true );
    });

    if(logos_width < $('.section-logos').width()) {
        $('.section-logos').addClass('not-active');
    }
    else {
        $('.section-logos').removeClass('not-active');
    }
});

$(window).scroll(function() {
    if($(window).width() >= 1200) {
        if ($(this).scrollTop() >= 165) {
            $('body').addClass('sticky-header');
        } else {
            $('body').removeClass('sticky-header');
        }
    } else {
        if ($(this).scrollTop() >= 125) {
            $('body').addClass('sticky-header');
        } else {
            $('body').removeClass('sticky-header');
        }
    }
});

