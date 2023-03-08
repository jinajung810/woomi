$(function(){
    mainInit();
    $(document).on('click','a[href="#"]',function(e){ e.preventDefault() }) 
 })
 
 function mainInit(){
   header()
   works ();
   master ();
 }

  function header(){
    $('#nav >.gnb >li').hover(function(){
      $('#header .hover').css('opacity','1')

    })
    $('#header').on('mouseleave',function(){
      $('#header .hover').css('opacity','0')
    })

  }


  function works(){
  let $selectmenu = $('.works .right .select-menu li');
  let imgurl = '';
  let timer = null , interval = 5000; 

  $selectmenu.eq(0).addClass('on')

  timer = setInterval (make, interval);
  function make(){
    cnt++;
    if (cnt > size-1) {
      cnt = 0
    }
    workscommon();

    $selectmenu.removeClass('on')
    $selectmenu.eq(cnt).addClass('on')
  }

  $selectmenu.on('click',function(){
    cnt = $(this).index();
    $selectmenu.removeClass('on')
    $(this).addClass('on')

    workscommon();
  })

  let $next = $('.works .right .arrow .next');
  let $prev = $('.works .right .arrow .prev');
  let size = $selectmenu.length ;
  let cnt = $selectmenu.index();

  $next.on('click',function(){
    cnt++;
    if(cnt > size-1){
      cnt = 0
    }
    workscommon();

    $selectmenu.removeClass('on')
    $selectmenu.eq(cnt).addClass('on')
  })

  $prev.on('click',function(){
    cnt--;
    if(cnt < 0){
      cnt = size-1
    }
    workscommon();

    $selectmenu.removeClass('on')
    $selectmenu.eq(cnt).addClass('on')
  })

  function workscommon (){
    imgurl = 'images/con1_'+cnt+'.png'
    $('.works .right img').attr('src',imgurl).hide().fadeIn(900)

    let arrTxt = ['동탄 린 스트라우스 더레이크','한국전력공사 본사 신사옥 건립공사','하남 IDC','고현~하동 IC 1공구 국도건설공사','굴포천 하수처리장']
    $('.works .right img + p').text(arrTxt[cnt])

    let arrh3 =['HOUSING WORKS','BUILDING WORKS','INVESTMENT WORKS','CIVIL WORKS','OTHER WORKS']
    let arrP =[]
    arrP[0]='우미는 자연환경과 생활 편의시설을 마음껏 즐기며 품격 있는 라이프스타일을 누릴 수 있도록, 편리한 주거 인프라를 구축하고 있습니다. '
    arrP[1]='도시에 하나의 빌딩이 지어진다는 것은 사무와 여가, 쇼핑과 레저 등이 어우러진 새로운 오브제의 탄생입니다. 우미는 대한민국 건축의 발전을 위해 삶의 터전이 될 주춧돌을 신중히 놓고 있습니다.'
    arrP[2]='우미는 기존에 강점을 발휘하던 주거 시장에 안주하지 않고 부동산 펀드 등을 활용해 오피스, 리테일, 물류, 데이터센터 등 다양한 부동산 자산의 개발/시공 참여 기회를 발굴하며 수익구조를 다변화하고 있습니다.'
    arrP[3]='지도에 없던 길을 내고, 땅과 땅을 잇는 교량을 놓으며, 물길을 새롭게 내어 황무지를 생활의 터전으로 가꿉니다. 우미는 대한민국의 지도를 이롭게 바꾼다는 사명감으로 한 걸음 더 나아가겠습니다.'
    arrP[4]='우미는 끊임없이 새로운 사업분야를 개척하며 나아갑니다.사람이 편리함과 지속 가능한 삶을 누릴 수 있도록 하는 모든 곳에 우미건설이 자리하고 있습니다. 기전, 환경, 조경, 산업설비 등 다양한 인프라들을 구축하며 세상을 조금씩 풍요롭게 만듭니다.'
    $('.works .left h3').text(arrh3[cnt])
    $('.works .left h3+p').text(arrP[cnt])

    clearInterval (timer);
    timer = setInterval(make,interval)
  }
 }

function master(){
  let first='', last='', w = 0;
  w =$('.master .mask ul li').width()+80
  let timer=null, interval=6000;

  timer=setInterval(make,interval);
  function make(){
      $('.master .mask ul').animate({marginLeft:'-='+ w},600,function(){
          first = $('.master .mask ul li').first();
          $('.master .mask ul').append(first);
          $('.master .mask ul').css({marginLeft:'+='+w}) 
      })
  }

  $('.master .btn-wrap .next').on('click',function(){
    $('.master .mask ul').animate({marginLeft:'-='+ w},600,function(){
      first = $('.master .mask ul li').first();
      $('.master .mask ul').append(first);
      $('.master .mask ul').css({marginLeft:'+='+w}) 
    })
    clearInterval(timer)
        timer = setInterval(make,interval);
  })

  $('.master .btn-wrap .prev').on('click',function(){
    $('.master .mask ul').animate({marginLeft:'+='+ w},600,function(){
      last =$('.master .mask ul li').last();
      $('.master .mask ul').prepend (last);
      $('.master .mask ul').css({marginLeft:'-='+w}) 
    })
    clearInterval(timer)
    timer = setInterval(make,interval);
  })
}


 $(function(){
  let ty = 0
  let h = $('#header').height();

  $('.family .title').on('click',function(){
      $('.family ul').toggleClass('on')
  })

  $('.top').on('click',function(){
    $('html,body').animate({scrollTop :0 },300)
  })

  $('.top').hide();

  $(window).on('scroll',function(){
    ty = $(window).scrollTop();

    if (ty >2800) { 
      $('.value .right .award li:nth-child(1) strong').addClass('on')
      $('.value .right .award li:nth-child(2) strong').addClass('on')
      $('.value .right .award li:nth-child(3) strong').addClass('on')
      $('.value .right .award li:nth-child(4) strong').addClass('on')
    } else {
      $('.value .right .award li:nth-child(1) strong').removeClass('on')
      $('.value .right .award li:nth-child(2) strong').removeClass('on')
      $('.value .right .award li:nth-child(3) strong').removeClass('on')
      $('.value .right .award li:nth-child(4) strong').removeClass('on')
    }

    if (ty >3400) {
      $('.value .right .prize li:nth-child(1) strong').addClass('on')
      $('.value .right .prize li:nth-child(2) strong').addClass('on')
      $('.value .right .prize li:nth-child(3) strong').addClass('on')
    }else {
      $('.value .right .prize li:nth-child(1) strong').removeClass('on')
      $('.value .right .prize li:nth-child(2) strong').removeClass('on')
      $('.value .right .prize li:nth-child(3) strong').removeClass('on')
    }

    if (ty > 400) {
      $('.top').show();
    } else {
      $('.top').hide();
    }

    if ( ty > h ) {
      $('#header').addClass('on');
      $('#header .hover').hide()
    } else {
      $('#header').removeClass('on');
      $('#header .hover').show()
    }
  })
})