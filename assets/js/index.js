const splitLines = new SplitType('.split-line', {types: 'lines'});
$('.line').wrap('<div class="line-wrap">')

// 스크롤 부드럽게
const lenis = new Lenis()

lenis.on('scroll', (e) => {
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)



$('.header .header__util .util__link--m__menu').on('click', function (e) {
  e.preventDefault();
  $('.header').addClass('on mix');
});
$('.header .header__mobile--nav .mobile .mobile__menu--close').on('click', function (e) {
  e.preventDefault();
  $('.header').removeClass('on');

  setTimeout(() => {
    $('.header').removeClass('mix');
  }, 500);
});;

// 뷰포트 너비 체크 및 mix 클래스 제거
$(window).on('resize', function () {
  if ($(window).width() >= 768) {
    $('.header').removeClass('mix on');
  }
});


gsap.to($('.creative .creative__grid'), {
  scrollTrigger: {
    trigger: '.creative',
    start: "0% 100%",
    end: "20% 100%",
  },
  yPercent: -20,
  opacity: 1,
  duration: 1,
})


$('.work .video--wrapper .video .video__link').on('mousemove', function(e) {
  var $cursor = $('.work .video--wrapper .video .video__cursor');
  
  var offset = $(this).offset();
  var x = e.pageX - offset.left;
  var y = e.pageY - offset.top;

  $cursor.css({
    'top':y + 'px', 'left':x + 'px', 'opacity': 1,
    'clip-path': 'inset(0 0 0 0 round 0.78vw)'
  });
});

$('.work .video--wrapper .video .video__link').on('mouseleave', function(e) {
  var $cursor = $('.work .video--wrapper .video .video__cursor');

  $cursor.css({
    'clip-path': 'inset(50% 100% 50% 0 round 0.78vw)',
  })
})


$('.service .process__more').click(function (e) {
  e.preventDefault();

  if( !$(this).next().is(':visible') ) {
    $(this).addClass('on').next().slideDown().parent().siblings().find('.process__more').removeClass('on').next().slideUp();
  } else {
    $(this).removeClass('on').next().slideUp();
  }
});

gsap.to($('.service .service__process .process'), {
  scrollTrigger: {
    trigger: ".service .service__process",
    start: "0% 100%",
    end: "100% 0%",
  },
  y: 0,
  opacity: 1,
  duration: 1,
})


$('.client .tab__list .tab__item').click(function (e) {
  e.preventDefault();

  tabName = $(this).children().data('tab');

  $(this).addClass('on').siblings().removeClass('on');
  
  $(tabName).addClass('on').removeClass('hide').siblings().addClass('hide');

  setTimeout(() => {
    $(tabName).siblings().removeClass('hide on');
  }, 600);
});



gsap.to($('.client .client__bg img'), {
  scrollTrigger: {
    trigger: ".client .client__bg",
    start: "0% 100%",
    end: "100% 100%",
    scrub: 0,
  },
  transform: 'translateY(0%)'
})

const clientImages = [
  './assets/images/client_bg1.avif',
  './assets/images/client_bg2.avif',
  './assets/images/client_bg3.avif',
  './assets/images/client_bg4.avif',
  './assets/images/client_bg5.avif',
  './assets/images/client_bg6.avif'
];

const $clientBg = $('.client .client__bg');
const $clientImg = $clientBg.find('img');
const imageCount = clientImages.length;

$clientBg.on('mousemove', function(e) {
  const clientBgWidth = $clientBg.width();
  const mouseX = e.pageX - $clientBg.offset().left;

  const index = Math.floor((mouseX / clientBgWidth) * imageCount);
  
  $clientImg.attr('src', clientImages[index]);
});


const benefit = gsap.timeline({
  scrollTrigger: {
    trigger: ".benefit",
    start: "0% 80%",
    end: "100% 100%",
  }
})
benefit.from($('.benefit .benefit__letter .letter__text'), {
  yPercent: 100,
  stagger: 0.5,
  duration: 0.8,
})
benefit.from($('.benefit .benefit__letter .letter .letter__img'), {
  scale: 0,
  delay: 0.5,
  duration: 1,
}, '<')

gsap.to($('.benefit .benefit__content .content'), {
  scrollTrigger: {
    trigger: ".benefit .benefit__content",
    start: "0% 100%",
    end: "100% 100%",
  },
  y: 0,
  opacity: 1,
  duration: 1,
})


$('.faq .faq__more').click(function (e) {
  e.preventDefault();

  if (!$(this).next().is(':visible')) {
    $(this).addClass('on').next().slideDown().parent().siblings().find('.faq__more').removeClass('on').next().slideUp();
  } else {
    $(this).removeClass('on').next().slideUp();
  }
})


$('.plan #toggle').change(function () {
  
  if ( $(this).is(':checked') ) {
    $('.plan .projects').addClass('on').removeClass('hide').siblings().addClass('hide').removeClass('on');

    setTimeout(() => {
      $('.plan .projects').siblings().removeClass('hide');
    }, 600);

  } else {
    $('.plan .subscriptions').addClass('on').removeClass('hide').siblings().addClass('hide').removeClass('on');

    setTimeout(() => {
      $('.plan .subscriptions').siblings().removeClass('hide');
    }, 600);
  }

  ScrollTrigger.refresh()
  lenis.resize()
});


const about = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "0% 100%",
    end: "100% 100%",
  }
})
about.from($('.about .about__letter .letter .letter__text'), {
  yPercent: 100,
  stagger: 0.4,
  duration: 0.7
})
about.from($('.about .about__letter .letter .letter__img'), {
  scale: 0,
  duration: 0.8,
}, '<')


const $slides1 = $('.flow__slide--first .slide__img');
const $slides2 = $('.flow__slide--seconde .slide__img');
let currentIndex = 0;

function showNextSlide() {
  // 현재 활성화된 이미지를 숨김
  $slides1.eq(currentIndex).removeClass('active');
  $slides2.eq(currentIndex).removeClass('active');
  
  // 다음 이미지 인덱스를 계산
  currentIndex = (currentIndex + 1) % $slides1.length;
  currentIndex = (currentIndex + 1) % $slides2.length;
  
  // 다음 이미지를 활성화
  $slides1.eq(currentIndex).addClass('active');
  $slides2.eq(currentIndex).addClass('active');
}

// 0.5초마다 showNextSlide 함수 호출
setInterval(showNextSlide, 500);


// 공통
$('.text-up').each(function(i, el) {
  gsap.from($(el).find('.line'), {
      scrollTrigger: { 
      trigger: el,
      start: "0% 100%",
      end: "100% 0%",
    },
    yPercent: 100,
    stagger: 0.2,
  })
})

$('[data-scroll="parent"]').each(function (i, el) {
  gsap.to($(el).find('[data-scroll="child"]'), {
    scrollTrigger: {
      trigger: el,
      start: "100% 100%",
      end: "100% 0%",
      scrub: 0,
    },
    yPercent: 25,
    ease: "none",
  })
})

// 분기점
ScrollTrigger.matchMedia({

  "(min-width: 1280px)": function () {
    const work = gsap.timeline({
      scrollTrigger: {
        trigger: ".work",
        start: "5% 0%",
        end: "85% 100%",
        scrub: 0,
      }
    })
    work.to($('.work .work__video--wrapper .video'), {
      margin: 0,
      width: "100%",
      transform: "translateY(0%)",
      ease: "none",
    }, 'work')
    work.to($('.work .work__content .content .content__video'), {
      margin: 0,
      width: "0px",
    }, 'work')
    work.to($('.work .work__video--wrapper .video .video__time'), {
      xPercent: -70,
    }, 'work')
    work.to($('.work .work__video--wrapper .video .video__link--all'), {
      yPercent: -110,
      delay: 0.1,
    }, 'work')
  },

  "(min-width: 768px)": function () {
    const loading = gsap.timeline({
      onComplete: function() {
        intro.play();
      }
    })
    loading.to($('.loading .loading__dimmed'), {
      height: 0,
      duration: 1,
    })
    loading.to($('.loading'), {
      height: 0,
      duration: 1,
      ease: 'circ.inOut'
    })
    loading.to($('.loading .loading__logo'), {
      scale: 0.7,
      delay: 0.1,
      duration: 1,
    }, '<')

    const intro = gsap.timeline({
      paused: true,
    })
    intro.from('.overview .overview__content .line-wrap .line', {
      yPercent: 100,
      stagger: 0.2,
      duration: 0.5,
    }, 'first')
    intro.to('.overview .overview__flow .flow', {
      y: 0,
    }, 'first')
    intro.to('.overview .overview__pick', {
      yPercent: -20,
      opacity: 1,
      delay: 1,
    }, '<')
    intro.to('.header .header__inner', {
      yPercent: -20,
      opacity: 1,
    }, '<')
    
    gsap.to('.overview .overview__flow', {
      scrollTrigger: {
        trigger: '.overview',
        start: "48% 100%",
        end: "100% 100%",
        scrub: 0,
      },
      transform: 'translateY(18%)',
      scale: 1.5,
    })



    const work = gsap.timeline({
      scrollTrigger: {
        trigger: ".work",
        start: "0% 10%",
        end: "100% 100%",
        scrub: 0,
      }
    })
    work.to($('.work .work__video--wrapper .video'), {
      margin: 0,
      width: "100%",
      transform: "translateY(0%)",
      ease: "none",
    }, 'work')
    work.to($('.work .work__content .content .content__video'), {
      margin: 0,
      width: "0px",
    }, 'work')
    work.to($('.work .work__video--wrapper .video .video__time'), {
      xPercent: -70,
    }, 'work')
    work.to($('.work .work__video--wrapper .video .video__link--all'), {
      yPercent: -110,
      delay: 0.1,
    }, 'work')
  }, // min-width: 767px

  "(max-width: 767px)": function () {
    const loading = gsap.timeline({
      onComplete: function() {
        intro.play();
      }
    })
    loading.to($('.loading .loading__dimmed'), {
      height: 0,
      duration: 1,
    })
    loading.to($('.loading'), {
      height: 0,
      duration: 1,
      ease: 'circ.inOut'
    })
    loading.to($('.loading .loading__logo'), {
      scale: 0.7,
      delay: 0.1,
      duration: 1,
    }, '<')

    const intro = gsap.timeline({
      paused: true,
    })
    intro.from('.overview .overview__content .line-wrap .line', {
      yPercent: 100,
      stagger: 0.2,
      duration: 0.5,
    }, 'first')
    intro.to('.overview .overview__flow .flow', {
      y: 0,
    }, 'first')
    intro.to('.overview .overview__pick', {
      yPercent: -20,
      opacity: 1,
      delay: 1,
    }, '<')
    intro.to('.header .header__inner', {
      yPercent: -20,
      opacity: 1,
    }, '<')
  } // max-width:767px
})