$(function(){
    
    $('.icon_sub_menu').click(function(){
        $('.sub_menu').toggleClass('on')
        $(this).children('img').toggleClass('on')
        $('.logo').children('img').toggleClass('on')
    })

    // $('.download_tab > li a .btn').hover(function(){
    //     $('.download_tab > li a .btn').parent('a').siblings('.language_ul').removeClass('on')
    //     $(this).toggleClass('on')
    //     $(this).siblings().toggleClass('on')
    //     $(this).parent('a').siblings('.language_ul').addClass('on')
    // },function(){
    //     $(this).toggleClass('on')
    //     $(this).siblings().toggleClass('on')

    // })

    // $('.download_tab > li .language_ul a .btn').hover(function(){
    //     $(this).toggleClass('on')
    //     $(this).siblings().toggleClass('on')
    // },function(){
    //     $(this).toggleClass('on')
    //     $(this).siblings().toggleClass('on')
    // })
    // $('.download_tab > li .language_ul > li a').click(function(){
    //     $(this).parent('li').css({backgroundColor:"#000"})
    //     $(this).css({color:"#54dd90"})
    //     console.log('done')
    // })
    let docsW =$(document).width();
    let docsH =$(document).height();

    console.log('document_넓이 ='+docsW);
    console.log('document_높이 ='+docsH);

    let windowWidth = $(window).width();
    let windowHeight = $(window).height();
    console.log('window_넓이 ='+windowWidth);
    console.log('window 높이 ='+windowHeight);

    let scrollY = $(window).scrollTop();
    console.log('스크롤 바 높이 ='+scrollY);

    let scrollHeight = $(window).prop('scrollHeight')
    console.log('스크롤 바 높이 ='+scrollHeight);

    
    $(window).scroll(function(){
        $(window).scrollTop();
        
    })


})





// 기기마다 윈도우 사이즈 다름 




