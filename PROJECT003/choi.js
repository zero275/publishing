$(document).ready(function(){
    $('.pAct').addClass('on')
    $('.pChoi').addClass('on')


// 화면 높이 맞추기

    // 실행문
    // header의 높이,section의 높이를 윈도우의 높이랑 맞추어라. 
    // 화면이 리사이즈 되었을때 윈도우의 높이랑 맞추어라. 
    let ht= $(window).height();
    console.log(ht)

    $('.choi').height(ht);
    $('.choi>div').height(ht);  

    $(window).resize(function(){

        let ht= $(window).height();
    console.log(ht)

    $('.choi').height(ht);
    $('.choi>div').height(ht);

    })
  

$('.home1').click(function(){

    $('.pAct').addClass('on')
    $('.pChoi').addClass('on')
    
});



// 본문설정
$('.main').click(function(){
    $('.main').css({'opacity':'0'});
   $('.about').addClass('on'); 

});

$('.menu ul li').click(function(){
    let mi = $(this).index()
    console.log(mi)
    $('.menu ul li span').css({'width':'0'});
    $('.menu ul li').eq(mi).find('span').css({'width':'100%'});

});

$('.menu ul li').eq(0).click(function(){
    $('.ma1 p').removeClass('on');
    $('.choi>div').removeClass('on');
    $('.dot').removeClass('on');
    $('.ma1').removeClass('on');
    $('.pAct').removeClass('on');
    $('.pChoi').removeClass('on');
    $('.main').css({'opacity':'0'});
    $('.about').addClass('on'); 
    $('.menu li a').css({'color':'#fff'});
    $('.menu li span').css({'background-color':'#fff'});
    $('.menu p i').css({'color':'#fff'});
    
});

$('.menu ul li').eq(1).click(function(){
    $('.ma1 p').removeClass('on');
    $('.choi>div').removeClass('on');
    $('.ma1').removeClass('on');
    $('.pAct').removeClass('on');
    $('.pChoi').removeClass('on');
    $('.main').css({'opacity':'0'});
    $('.filmo').addClass('on');
    $('.menu li a').css({'color':'#1c1c1c'});
    $('.menu li span').css({'background-color':'#555'});
    $('.menu p i').css({'color':'#555'});
    
});

$('.menu ul li').eq(2).click(function(){
    
    $('.choi>div').removeClass('on');
    $('.ma1').removeClass('on');
    $('.pAct').removeClass('on');
    $('.pChoi').removeClass('on');
    $('.main').css({'opacity':'0'});
    $('.master').addClass('on');
    $('.menu li a').css({'color':'#fff'});
    $('.master .ma1').eq(0).css({'opacity':'1'});
    $('.dot').addClass('on');
    $('.dot li span').removeClass('on');
    $('.dot li span').eq(0).addClass('on');
    $('.ma1').addClass('on');
    $('.ma1 p').addClass('on');
    $('.menu p i').css({'color':'#fff'});
    $('.cha_txt').css({'bottom':'10px', 'opacity': 1});
    $('.ma1').css({'z-index':'32'});
    $('.ma2').css({'z-index':'30'});
    $('.ma3').css({'z-index':'30'});
    $('.ma4').css({'z-index':'30'});
    $('.ma5').css({'z-index':'30'});
    $('.she_img').addClass('on')
    $('.master>div').eq(0).css({'opacity':'1','transform':' translateZ(0px)'});
    $('.master>div').eq(0).css({'opacity':'1','transform':' translateZ(0px)'});
    $('.master>div').eq(1).css({'opacity':'0','transform':' translateZ(-5000px)'});
    $('.master>div').eq(2).css({'opacity':'0','transform':' translateZ(-10000px)'});
    $('.master>div').eq(3).css({'opacity':'0','transform':' translateZ(-15000px)'});
    $('.master>div').eq(4).css({'opacity':'0','transform':' translateZ(-20000px)'});

    // let si=0;
    //  let im=setInterval(function(){
    //  if(si<3)si++;
    //  if(si==3)si=0;
    // $('.she_img img').eq(si-1).css({'right':'-450px'}).stop().animate({'right':'150%'},400);
    //  $('.she_img img').eq(si).css({'right':'-200%'}).stop().animate({'right':'-450px'},400);


    // },6000);
});

$('.menu ul li').eq(3).click(function(){
    $('.ma1 p').removeClass('on');
    $('.choi>div').removeClass('on');
    $('.dot').removeClass('on');
    $('.ma1').removeClass('on');
    $('.pAct').removeClass('on');
    $('.pChoi').removeClass('on');
    $('.main').css({'opacity':'0'});
    $('.human').addClass('on');
});
$('.menu ul li').eq(4).click(function(){
    $('.ma1 p').removeClass('on');
    $('.choi>div').removeClass('on');
    $('.dot').removeClass('on');
    $('.ma1').removeClass('on');
    $('.pAct').removeClass('on');
    $('.pChoi').removeClass('on');
    $('.main').css({'opacity':'0'});
    
    $('.gall').addClass('on');
    
});

$('.menu p i').click(function(){
    
    $('.main').css({'opacity':'1'});
    $('.choi>div').removeClass('on');
    $('.menu li a').css({'color':'#fff'});
    $('.menu li span').css({'background-color':'#fff'});
})





$('.dot li').click(function(){

});

// $('.dot li span').mouseenter(function(){
// let spi=$(this).index();
// $('.dot li').eq(spi+1).find('span').find('p').toggleClass('on')
// });

$('.dot li').eq(0).click(function(){
    $('.ma1').removeClass('on');
    $('.master>div').removeClass('on');
    $('.dot li span').removeClass('on');
    $('.ma4_txt p').removeClass('on');
    $('.ma1 p').addClass('on');
    $('.dot li span').eq(0).addClass('on');
    $('.ma1').css({'z-index':'32'});
    $('.ma2').css({'z-index':'30'});
    $('.ma3').css({'z-index':'30'});
    $('.ma4').css({'z-index':'30'});
    $('.ma5').css({'z-index':'30'});
    $('.she_img').addClass('on');
    
    
    $('.master>div').eq(0).css({'opacity':'1','transform':' translateZ(0px)'});
    $('.master>div').eq(1).css({'opacity':'0','transform':' translateZ(-5000px)'});
    $('.master>div').eq(2).css({'opacity':'0','transform':' translateZ(-10000px)'});
    $('.master>div').eq(3).css({'opacity':'0','transform':' translateZ(-15000px)'});
    $('.master>div').eq(4).css({'opacity':'0','transform':' translateZ(-20000px)'});
    
    // let si=0;
    //  setInterval(function(){
    //  if(si<3)si++;
    //  if(si==3)si=0;
    // $('.she_img img').eq(si-1).css({'right':'-450px'}).stop().animate({'right':'150%'},400);
    //  $('.she_img img').eq(si).css({'right':'-200%'}).stop().animate({'right':'-450px'},400);


    // },6000);

});
$('.dot li').eq(1).click(function(){
    $('.ma1 p').removeClass('on');
    $('.ma1').removeClass('on');
    $('.master>div').removeClass('on');
    $('.dot li span').removeClass('on');
    $('.crim_1').removeClass('on');
    $('.she_img').removeClass('on');
    $('.ma4_txt p').removeClass('on');
    $('.dot li span').eq(1).addClass('on');
    $('.ma2').toggleClass('on');
    $('.ma1').css({'z-index':'30'});
    $('.ma2').css({'z-index':'32'});
    $('.ma3').css({'z-index':'30'});
    $('.ma4').css({'z-index':'30'});
    $('.ma5').css({'z-index':'30'});

    
    
    $('.master>div').eq(0).css({'opacity':'0','transform':' translateZ(10000px)'});
    $('.master>div').eq(1).css({'opacity':'1','transform':' translateZ(0px)'});
    $('.master>div').eq(2).css({'opacity':'0','transform':' translateZ(-5000px)'});
    $('.master>div').eq(3).css({'opacity':'0','transform':' translateZ(-10000px)'});
    $('.master>div').eq(4).css({'opacity':'0','transform':' translateZ(-15000px)'});
});
$('.dot li').eq(2).click(function(){
    $('.ma1 p').removeClass('on');
    $('.ma1').removeClass('on');
    
    $('.master>div').removeClass('on');
    $('.dot li span').removeClass('on');
    $('.crim_1').removeClass('on');
    $('.she_img').removeClass('on');
    $('.ma4_txt p').removeClass('on');
    $('.dot li span').eq(2).addClass('on');
    $('.beBtn').addClass('on')
    $('.ma1').css({'z-index':'30'});
    $('.ma2').css({'z-index':'30'});
    $('.ma3').css({'z-index':'32'});
    $('.ma4').css({'z-index':'30'});
    $('.ma5').css({'z-index':'30'});
    $('.ma3').addClass('on');
    $('.master>div').eq(0).css({'opacity':'0','transform':' translateZ(15000px)'});
    $('.master>div').eq(1).css({'opacity':'0','transform':' translateZ(10000px)'});
    $('.master>div').eq(2).css({'opacity':'1','transform':' translateZ(0px)'});
    $('.master>div').eq(3).css({'opacity':'0','transform':' translateZ(-5000px)'});
    $('.master>div').eq(4).css({'opacity':'0','transform':' translateZ(-10000px)'});

});
$('.dot li').eq(3).click(function(){
    $('.ma1 p').removeClass('on');
    $('.ma1').removeClass('on');
    $('.master>div').removeClass('on');
    $('.dot li span').removeClass('on');
    $('.crim_1').removeClass('on')
    $('.she_img').removeClass('on')
    $('.dot li span').eq(3).addClass('on');
    $('.crim_1').addClass('on');
    $('.crim_3 img').addClass('on');
    // $('.ma4_right').css({'color':''})
    $('.ma4_txt p').addClass('on');
    $('.ma1').css({'z-index':'30'});
    $('.ma2').css({'z-index':'30'});
    $('.ma3').css({'z-index':'30'});
    $('.ma4').css({'z-index':'32'});
    $('.ma5').css({'z-index':'30'});
    
    
    
    $('.master>div').eq(0).css({'opacity':'0','transform':' translateZ(20000px)'});
    $('.master>div').eq(1).css({'opacity':'0','transform':' translateZ(15000px)'});
    $('.master>div').eq(2).css({'opacity':'0','transform':' translateZ(10000px)'});
    $('.master>div').eq(3).css({'opacity':'1','transform':' translateZ(0px)'});
    $('.master>div').eq(4).css({'opacity':'0','transform':' translateZ(-5000px)'});
});

$('.ma4_right').click(function(){
    $('.crim_3 img').removeClass('on')
    $('.criminal').addClass('on');
    $('.crim_3').addClass('on');
    $(this).css({'opacity':'0'})
    $('.ma4_left').css({'opacity':'1'})


})
$('.ma4_left').click(function(){
    $('.criminal').removeClass('on');
    $('.crim_3').removeClass('on');
    $('.crim_3 img').addClass('on')
    $(this).css({'opacity':'0'})
    $('.ma4_right').css({'opacity':'1'})

})

$('.dot li').eq(4).click(function(){
    $('.ma1 p').removeClass('on');
    $('.ma1').removeClass('on');
    $('.master>div').removeClass('on');
    $('.dot li span').removeClass('on');
    $('.crim_1').removeClass('on')
    $('.she_img').removeClass('on')
    $('.ma4_txt p').removeClass('on');
    $('.dot li span').eq(4).addClass('on');
    $('.ma1').css({'z-index':'30'});
    $('.ma2').css({'z-index':'30'});
    $('.ma3').css({'z-index':'30'});
    $('.ma4').css({'z-index':'30'});
    $('.ma5').css({'z-index':'32'});

    
    $('.master>div').eq(0).css({'opacity':'0','transform':' translateZ(25000px)'});
    $('.master>div').eq(1).css({'opacity':'0','transform':' translateZ(20000px)'});
    $('.master>div').eq(2).css({'opacity':'0','transform':' translateZ(15000px)'});
    $('.master>div').eq(3).css({'opacity':'0','transform':' translateZ(10000px)'});
    $('.master>div').eq(4).css({'opacity':'1','transform':' translateZ(0px)'});

});

$('.tmi_w p').mouseenter(function(){
    let twi=$(this).index();
    console.log(twi);

   $('.tmi_e p').eq(twi).css({'opacity':'1'}) ;
});

$('.tmi_w p').mouseleave(function(){
    let twi=$(this).index();
    console.log(twi);

   $('.tmi_e p').eq(twi).css({'opacity':'0'}) ;
});

// 필모설정

$('.fil_1>div').click(function(){
    let tii = $(this).index();
    console.log(tii);

    $(('.fil_1>div')).eq(tii).toggleClass('on')

    $(('.fil_2>div')).eq(tii).toggleClass('on')

});

// 어바웃 TMI 이동

$('.tmii').click(function(){

    $('.ab-info').css({'top':'00px'});
    $('.box-0').css({'display':'block','bottom':'500px', 'right':'200px'});
    $(this).css({'bottom':'500px', 'right':'200px'});
    $('.tmi-all').css({'top':'920px', 'right':'-20px'});
    $('.tmii span').addClass('on');
    

});
$('.box-0').click(function(){
    $('.ab-info').css({'top':'200px'});
    $('.box-0').css({'display':'none'});
    $('.tmii').css({'bottom':'300px', 'right':'0px'});
    $(this).css({'bottom':'300px', 'right':'0px'});
    $('.tmi-all').css({'top':'930px', 'right':'-700px'});
    $('.tmii span').removeClass('on');


});

// 사람 최민식 아래 텍스트 이동

let hi=0;
$('.h_left').click(function(){

    if(hi<2) hi++
    let hii =-1700*hi
    if(hi==2)hi=0;


    $('.h_right').css({'display':'block'});
    $('.heis_inner ul').stop().animate({'left':hii},800)

});

// 악마를 보았다 비하인드

$('.beBtn').click(function(){

    $('.behind').toggleClass('on');


});
$('.reading').click(function(){

    $(this).toggleClass('on');


});

$('.gall>div').eq(1).click(function(){

$('.young').toggleClass('on')



})





    


    





})