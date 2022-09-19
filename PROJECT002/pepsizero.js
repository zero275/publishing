$(document).ready(function(){

    $('.ham_0').click(function(){

        $('.menu').addClass('on');
        $('.ham_1 p').addClass('on');
        
    })

    $('.ham_1 p').click(function(){

        $(this).removeClass('on');
        $('.menu').removeClass('on');
    })

// img1 이미지 이동
var i = 0;

  setInterval(function(){
 
  i++;
  if(i==5)i=0;

 
  


  //위로 올려라.
  $('.ul1 li').eq(i-1).css('right',0).stop().animate({'right':'-100%'},800);
  $('.ul1 li').eq(i).css('right','-100%').stop().animate({'right':"0"},800)
  
  },4000);


// 탑메뉴가 스크롤에 따라 내려오게 하라 

    // 윈도우의 높이 변수
    let ht =$(window).height()

console.log(ht) 
// 높이 937

// 화면의(con)의 높이를 윈도우의 크기와 맞춰라

$('con')









    /*let i =0;

    $('.con5_img1 .ul1').click(function(){
        if(i<5) i++
        let tt =-450*i
        if(i==4)i=-1;

        


        $('.con5_img1 .ul1').stop().animate({'left':tt},500)


    }); 

    setInterval(function(){

        $('.con5_img1 .ul1').trigger('click')
        

    },4000); */

    



/*
    let i2 =0;

    // img2 이미지 이동





    

    $('.con5_img2 .ul2').click(function(){
        if(i2<5) i2++
        let ta =-160*i2
        if(i2==4)i2=-1;

        


        $('.con5_img2 .ul2').stop().animate({'top':ta},500)


    }); 

    setInterval(function(){

        $('.con5_img2 .ul2').trigger('click')
        

    },4300); */
    var ii = 0;

  setInterval(function(){
 
  ii++;
  if(ii==5)ii=0;

 
  


  //위로 올려라.
  $('.ul2 li').eq(ii-1).css('top',0).stop().animate({'top':'-100%'},800);
  $('.ul2 li').eq(ii).css('top','-100%').stop().animate({'top':"0"},800);
  
  },4000);



  $(window).scroll(function(){


    let sc = $(this).scrollTop();
    $('.counter').text(sc)

    let a =$('.con1').offset().top;
    

    
    // 메뉴바 스크롤값에 따라 내리기
    if(sc >= 1000){
        $('.top').stop().slideDown();

        //드랍캔
        $('.can_1 img').removeClass('on')
        $('.can_1 img').stop().addClass('on')
        $('.can_2 img').removeClass('on')
        $('.can_2 img').stop().addClass('on')

        // 나오는500ml

        $('.can_3 img').addClass('on')
        $('.can_p1').addClass('on')
        $('.topBtn').css({'opacity':1})
    }
    if(sc<1000){
        $('.top').stop().slideUp()
        $('.topBtn').css({'opacity':0})
        $('.can_1 img').removeClass('on')
        $('.can_2 img').removeClass('on')
    }

    if(sc>600){

        $('.pepsiYou a').addClass('on')
        
    }

    if(sc>2600){

        $('.other_p ul li').addClass('on')

    }
    if(sc<=2600){

        $('.other_p ul li').removeClass('on')
}
    if(sc>5800){

        $('.con6 img').addClass('on')
        $('.con6 p').addClass('on')
        $('.con6 span').addClass('on')
    }
    if(sc<5800){

        $('.con6 img').removeClass('on')
        $('.con6 p').removeClass('on')
        $('.con6 span').removeClass('on')
    }


  })


    $('.topBtn').click(function(){

        let ws = $('.header').scrollTop()
       

        $('html,body').animate({scrollTop:ws},700)


    });



    let tp =0;

    let slide=setInterval(function(){
        tp++;
        if(tp==5)tp=0;
        $('.star_img ul li').eq(tp-1).stop().animate({'opacity':'0'},500)
        $('.star_img ul li').eq(tp).stop().animate({'opacity':'1'},500)
      
    },3000)

    $('.arrow_0 i').click(function(){

        $('.danger ul').addClass('on');




    });

    $('.img_inner').mouseenter(function(){

        clearInterval(slide)
});


$('.img_inner').mouseleave(function(){

    let tp =0;

    slide=setInterval(function(){
        tp++;
        if(tp==5)tp=0;
        $('.star_img ul li').eq(tp-1).stop().animate({'opacity':'0'},500);
        $('.star_img ul li').eq(tp).stop().animate({'opacity':'1'},500);
      
    },2000);





});




    

    



    


})