$(document).ready(function(){

    let ht= $(window).height();
    let hw= $(window).width();
   

    $('html,body').height(ht); 

    $(window).resize(function(){

        let ht= $(window).height();
    

    $('html,body').height(ht);

    });

    // 시작시 설정

    // 홈에 올렸을때
    $('.home img').mouseenter(function(){

        $('.header p').addClass('on');

    });
    // 홈에서 떠났을때
    $('.home img').mouseleave(function(){

        $('.header p').removeClass('on');

    });
    
// 카드1을 클릭(프로필)할때
$('.card ul li').eq(0).click(function(){
    $('.main').hide();
    $('.l_lan ul li').removeClass('on');
    $('.l_lan ul li').eq(1).addClass('on');
    $('.profile').addClass('on');
    $('.xkey').addClass('on');
    $('.publising').removeClass('on');
    $('.publising').hide();
    $('.pu_con01').hide();
});

// 카드2을 클릭(디자인)할때
$('.card ul li').eq(1).click(function(){
    $('.main').hide();
    $('.design').addClass('on')
    $('.l_lan ul li').removeClass('on');
    $('.l_lan ul li').eq(5).addClass('on');
    $('.xkey').addClass('on');
    $('.de_right01').show();
    $('.de_right02').hide();
    $('.de_right03').hide();
    $('.de_left01').hide();
    $('.de_left02').hide();
    $('.de_left03').hide();
    $('.d_m_back').removeClass('on');
    $('.d_leaf').show();
    $('.d_m_img02').hide();
    $('.d_m_img03').hide();
    $('.d_m_img04').hide();
    $('.p_method').hide();
    $('.d_sub>div').hide();
    $('.d_sub>div').eq(0).show();
    $('.publising').removeClass('on');
    $('.publising').hide()
});

// 카드3을 클릭(퍼블리싱)할때
$('.card ul li').eq(2).click(function(){
    $('.main').hide();
    $('.profile').removeClass('on');
    $('.publising').addClass('on');
    $('.pu01').show();
    // $('.pu02').show();
    $('.l_lan ul li').removeClass('on');
    $('.l_lan ul li').eq(9).addClass('on');
    $('.pu_menu p').addClass('on');
    $('.pu_img img').eq(0).addClass('on');
    $('.p_btn01').show();
    $('.p_btn01').addClass('on');
    $('.p_btn02').hide();
    $('.p_btn03').hide();
    $('.pu_con01').hide();
    $('.pu_con02').hide();
    $('.conX02').hide();
    $('.pu_con03').hide();
    
    
    
});



// x키 클릭시
$('.xkey').click(function(){
    $('.main').show();
    $('.xkey').removeClass('on');
    $('.profile').removeClass('on');
    $('.profile_02').removeClass('on');
    $('.ability').removeClass('on');
    $('.ability_02').removeClass('on');
    $('.l_lan ul li').removeClass('on');
$('.l_lan ul li').eq(0).addClass('on');
$('.design').removeClass('on');
$('.d_m_back').removeClass('on');
$('.d_m_back').removeClass('on1');
$('.d_m_back').removeClass('on2');
$('.p_method').hide();
$('.loud').hide();
$('.web').hide();
$('.publising').removeClass('on');
$('.publising').show();


});


// 홈버튼 클릭시
$('.home').click(function(){
$('.main').show();
$('.profile').removeClass('on');
$('.profile_02').removeClass('on');
$('.ability').removeClass('on');
$('.ability_02').removeClass('on');
$('.l_lan ul li').removeClass('on');
$('.l_lan ul li').eq(0).addClass('on');
$('.design').removeClass('on');
$('.d_m_img01').show();
$('.d_m_back').removeClass('on');
$('.d_m_back').removeClass('on1');
$('.d_m_back').removeClass('on2');
$('.p_method').hide();
$('.loud').hide();
$('.web').hide();
$('.xkey').removeClass('on');
$('.publising').removeClass('on');
$('.publising').show();
$('.pu_menu p').removeClass('on');
$('.pu_menu p span').removeClass('on');
$('.pu_menu p span').eq(0).addClass('on');
$('.pu_img img').removeClass('on');
$('.p_btn01').removeClass('on');
    $('.p_btn02').hide();
    $('.p_btn03').hide();

});
// 프로필에서
//  오른쪽 버튼 클릭시 
$('.p_right img').click(function(){
$('.profile').removeClass('on');
$('.profile_02').addClass('on');
$('.l_lan ul li').removeClass('on');
$('.l_lan ul li').eq(2).addClass('on');
$('.h_img>div img').addClass('on');
});
// 오른쪽 버튼 마우스오버시
$('.p_right img').mouseenter(function(){
$('.p_right_i p').addClass('on')
});
$('.p_right img').mouseleave(function(){
    $('.p_right_i p').removeClass('on')
    });

// 하비에서
$('.p02_left').click(function(){
    $('.profile').addClass('on');
    $('.profile_02').removeClass('on');
    $('.l_lan ul li').removeClass('on');
    $('.l_lan ul li').eq(1).addClass('on');
    $('.h_img>div img').removeClass('on');

});
$('.p02_right').click(function(){
    $('.profile_02').removeClass('on');
    $('.ability').addClass('on');
    $('.l_lan ul li').removeClass('on');
    $('.l_lan ul li').eq(3).addClass('on');
    $('.a_stick01 p').addClass('on');
    $('.a_stick02 p').addClass('on');
    $('.a_other').addClass('on');
});
// 오른쪽 버튼 마우스오버시
$('.p02_right img').mouseenter(function(){
    $('.p02_right_i p').addClass('on')
    });
    $('.p02_right img').mouseleave(function(){
        $('.p02_right_i p').removeClass('on')
        });

// 어빌리티1에서
$('.a_left').click(function(){
    $('.profile_02').addClass('on');
    $('.ability').removeClass('on');
    $('.l_lan ul li').removeClass('on');
    $('.l_lan ul li').eq(2).addClass('on');
    $('.h_img>div img').addClass('on');
    $('.a_stick01 p').removeClass('on');
    $('.a_stick02 p').removeClass('on');
    $('.a_other').removeClass('on');
});
$('.a_right').click(function(){
    $('.ability_02').addClass('on');
    $('.ability').removeClass('on');
    $('.l_lan ul li').removeClass('on');
    $('.l_lan ul li').eq(4).addClass('on');
    $('.h_img>div img').addClass('on');
    $('.a_stick01 p').removeClass('on');
    $('.a_stick02 p').removeClass('on');
    $('.a_other').removeClass('on');
    $('.a02_right').hide();
});
// 오른쪽 버튼 마우스오버시
$('.a_right img').mouseenter(function(){
    $('.a_right_i p').addClass('on')
    });
    $('.a_right img').mouseleave(function(){
        $('.a_right_i p').removeClass('on')
        });

// 어빌리티2에서 
$('.a02_left').click(function(){
    $('.ability_02').removeClass('on');
    $('.ability').addClass('on');
    $('.l_lan ul li').removeClass('on');
    $('.l_lan ul li').eq(3).addClass('on');
    $('.a_stick01 p').addClass('on');
    $('.a_stick02 p').addClass('on');
    $('.a_other').addClass('on');
    
});

// CI디자인 오른쪽버튼 클릭시

$('.de_right01').click(function(){

$('.d_m_back').addClass('on');
$('.de_right01').hide();
$('.de_right02').show();
$('.de_right03').hide();
$('.de_left01').show();
$('.de_left02').hide();
$('.de_left03').hide();
$('.d_leaf').hide();
$('.l_lan ul li').removeClass('on');
$('.l_lan ul li').eq(6).addClass('on');
$('.d_m_img01').hide();
$('.d_m_img02').show();
$('.p_method').show();
$('.d_sub>div').hide();
$('.d_sub>div').eq(1).show();
$('.p_method img').removeClass('on')
$('.p_method img').eq(3).addClass('on')
});

$('.de_left01').click(function(){
    $('.d_m_back').removeClass('on');
    $('.de_right01').show();
$('.de_right02').hide();
$('.de_right03').hide();
$('.de_left01').hide();
$('.de_left02').hide();
$('.de_left03').hide();
$('.d_leaf').show();
$('.l_lan ul li').removeClass('on');
$('.l_lan ul li').eq(5).addClass('on');
$('.d_m_img01').show();
$('.d_m_img02').hide();
$('.p_method').hide();
$('.d_sub>div').hide();
$('.d_sub>div').eq(0).show();

});




// BI디자인 버튼 클릭시
$('.de_right02').click(function(){
    
    $('.d_m_back').addClass('on1');

    $('.de_right01').hide();
$('.de_right02').hide();
$('.de_right03').show();
$('.de_left01').hide();
$('.de_left02').show();
$('.de_left03').hide();
$('.l_lan ul li').removeClass('on');
$('.l_lan ul li').eq(7).addClass('on');
$('.d_m_img02').hide();
$('.d_m_img03').show();
$('.p_method').hide();
$('.d_leaf').hide();
$('.d_sub>div').hide();
$('.d_sub>div').eq(2).show();
$('.loud').show();
});


$('.de_left02').click(function(){
    $('.d_m_back').removeClass('on1');
    $('.d_m_back').addClass('on');
    $('.de_right01').hide();
    $('.de_right02').show();
    $('.de_right03').hide();
    $('.de_left01').show();
    $('.de_left02').hide();
    $('.de_left03').hide();
    $('.d_leaf').hide();
    $('.l_lan ul li').removeClass('on');
    $('.l_lan ul li').eq(6).addClass('on');
    $('.d_m_img01').hide();
    $('.d_m_img02').show();
    $('.p_method').show();
    $('.d_sub>div').hide();
    $('.d_sub>div').eq(1).show();
    $('.p_method img').removeClass('on')
    $('.p_method img').eq(3).addClass('on');
    $('.loud').hide();
    });



// 라우드 구간
$('.de_right03').click(function(){
    $('.d_m_back').removeClass('on1');
    $('.d_m_back').addClass('on2');

    $('.de_right01').hide();
$('.de_right02').hide();
$('.de_right03').hide();
$('.de_left01').hide();
$('.de_left02').hide();
$('.de_left03').show();
$('.loud').hide();
$('.l_lan ul li').removeClass('on');
$('.l_lan ul li').eq(8).addClass('on');
$('.d_sub>div').hide();
$('.d_sub>div').eq(3).show();
$('.web').show();
$('.web_02').hide();
});


$('.de_left03').click(function(){
$('.d_m_back').removeClass('on2');
$('.d_m_back').addClass('on1');

$('.de_right01').hide();
$('.de_right02').hide();
$('.de_right03').show();
$('.de_left01').hide();
$('.de_left02').show();
$('.de_left03').hide();
$('.loud').show();
$('.d_sub>div').hide();
$('.d_sub>div').eq(2).show();
$('.web').hide();
});

// 라우드 설정

$('.loud_02 p').click(function(){

    let li=$(this).index();
    console.log(li)

    $('.loud_02 p').removeClass('on');
    $('.loud_02 p').eq(li).addClass('on');
    $('.loud_01 p').removeClass('on');
    $('.loud_01 p').eq(li).addClass('on');

});

// 웹디자인 2가지 클릭시
// p 전체 설정
$('.d_sub04 p').click(function(){

let di=$(this).index();
$('.d_sub04 p').removeClass('on');
$('.d_sub04 p').eq(di-1).addClass('on');
$('.d_line span').removeClass('on');
$('.d_line span').eq(di-1).addClass('on');

});
// 첫번째
$('.d_sub04 p').eq(0).click(function(){
    $('.web_01').show();
    $('.web_02').hide();
    $('.d_m_back').removeClass('on3');
    $('.d_m_back').addClass('on2');
    $('.web_03').hide();
    $('.w_btn').hide();
    $('.w_btn div').removeClass('on');
    $('.w_btn div').eq(0).addClass('on');

});
// 두번쨰
$('.d_sub04 p').eq(1).click(function(){
    $('.web_01').hide();
    $('.web_02').show();
    $('.d_m_back').removeClass('on2');
    $('.d_m_back').addClass('on3');
    $('.w_btn div').eq(0).addClass('on');
    $('.w_btn').show();
    });
    
// 리소스의 점 버튼
$('.w_btn div').eq(0).click(function(){
    $('.w_btn div').removeClass('on');
    $('.w_btn div').eq(0).addClass('on');
    $('.web_02').show();
    $('.web_03').hide();
    $('.d_m_back').addClass('on3');
});
    
$('.w_btn div').eq(1).click(function(){
    $('.w_btn div').removeClass('on');
    $('.w_btn div').eq(1).addClass('on');
    $('.web_02').hide();
    $('.web_03').show();
    $('.d_m_back').removeClass('on3');
});

// 퍼블리싱 메뉴 클릭시
// 전체설정
$('.pu_menu p').click(function(){

    let pi=$(this).index();
    console.log(pi);

    $('.pu_menu p span').removeClass('on');  
    $('.pu_menu p span').eq(pi).addClass('on');
    $('.pu_img img').removeClass('on');  
    $('.pu_img img').eq(pi).addClass('on');
    $('.pu_btn>div').hide();  
    $('.pu_btn>div').eq(pi).show();
});
// 첫번째 산림자원 버튼 클릭시
$('.pu_menu p').eq(0).click(function(){
    $('.p_btn01').show();

});
// 두번째 펩시 버튼 클릭시
$('.pu_menu p').eq(1).click(function(){
    $('.pu_con02').show();

});
// 세번째 최민식 버튼 클릭시
$('.pu_menu p').eq(2).click(function(){
    $('.pu_con03').show();
    $('.pu_con02').hide();

});


// 충남산림 컨셉뷰 클릭시
$('.pu_img01').click(function(){
    $('.conX img').show();
    $('.pu_con01').show();
    $('.con01_inner').addClass('on');

});

//산림자원연구소 컨셉뷰의 X키 클릭시
$('.conX img').click(function(){
    $('.conX img').hide();
    $('.pu_con01').hide();
    $('.con01_inner').removeClass('on');
});

// 펩시 컨셉뷰 클릭시
$('.pu_img02').click(function(){
    $('.conX02').show();
    $('.pu_con02').show();
    $('.pu_con02').addClass('on');
    $('.pu_con02 img').addClass('on');
    $('.pu_menu').hide();

});

//펩시 컨셉뷰의 X키 클릭시
$('.conX02').click(function(){
    $('.conX02').hide();
    $('.pu_con02').hide();
    $('.pu_con02').removeClass('on');
    $('.pu_con02 img').removeClass('on');
    $('.pu_menu').show();
});

// 최민식 컨셉뷰 클릭시
$('.pu_img03').click(function(){
    
    $('.pu_con03').show();
    $('.conX03').show();
    $('.pu_con03').addClass('on');

});
//최민식 컨셉뷰의 X키 클릭시
$('.conX03').click(function(){
    
    $('.pu_con03').hide();
    $('.pu_con03').removeClass('on');
});


    
});