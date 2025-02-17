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

// header
// document.querySelector('.header .header__util .util__link--m__menu').addEventListener('click', (e) => {
//   e.preventDefault();
//   document.querySelector('.header').classList.add('on', 'mix');
// });

// document.querySelector('.header .header__mobile--nav .mobile .mobile__menu--close').addEventListener('click', (e) => {
//   e.preventDefault();
//   const header = document.querySelector('.header');
//   header.classList.remove('on');

//   setTimeout(() => {
//     header.classList.remove('mix');
//   }, 500);
// });

// // 뷰포트 너비 체크 및 mix 클래스 제거
// window.addEventListener('resize', () => {
//   if (window.innerWidth >= 768) {
//     document.querySelector('.header').classList.remove('mix', 'on');
//   }
// });

// gsap.to(document.querySelector('.creative .creative__grid'), {
//   scrollTrigger: {
//     trigger: '.creative',
//     start: "0% 100%",
//     end: "20% 100%",
//   },
//   yPercent: -20,
//   opacity: 1,
//   duration: 1,
// });


// document.querySelectorAll('.work .video--wrapper .video .video__link').forEach(link => {
//   link.addEventListener('mousemove', (e) => {
//     const cursor = document.querySelector('.work .video--wrapper .video .video__cursor');
//     let offset = link.getBoundingClientRect();
//     let x = e.clientX - offset.left;
//     let y = e.clientY - offset.top;

//     Object.assign(cursor.style, {
//       top: `${y}px`,
//       left: `${x}px`,
//       opacity: 1,
//       clipPath: 'inset(0 0 0 0 round 0.78vw)'
//     });
//   });

//   link.addEventListener('mouseleave', () => {
//     const cursor = document.querySelector('.work .video--wrapper .video .video__cursor');
//     cursor.style.clipPath = 'inset(50% 100% 50% 0 round 0.78vw)';
//   });
// });


// document.querySelectorAll('.service .process__more').forEach(proMore => {
//   proMore.addEventListener('click', (e) => {
//     e.preventDefault();

//     const proItem = proMore.closest('.service .process__item'); 
//     const proSub = proItem.querySelector('.service__process .process__sub');

//     let isHidden = proMore.classList.contains('on');

//     document.querySelectorAll('.service .process__more').forEach(el => {
//       el.classList.remove('on');
//       const siblingSub = el.closest('.service .process__item').querySelector('.service__process .process__sub');
//       siblingSub.style.height = '';
//       siblingSub.classList.remove('on');
//     });

//     if (!isHidden) {
//       proMore.classList.add('on');
//       proSub.classList.add('on');

//       const computedStyle = getComputedStyle(proSub);

//       const windowWidth = window.innerWidth;
//       const answerHeightInVw = (proSub.scrollHeight) / windowWidth * 100 + 'vw';

//       proSub.style.height = answerHeightInVw;
//     } else {
//       proSub.style.height = '';
//       proSub.classList.remove('on');
//     }

//     setTimeout(() => {
//       ScrollTrigger.refresh();
//       lenis.resize();
//     }, 500)
//   });
// });

// gsap.to(document.querySelector('.service .service__process .process'), {
//   scrollTrigger: {
//     trigger: ".service .service__process",
//     start: "0% 100%",
//     end: "100% 0%",
//   },
//   y: 0,
//   opacity: 1,
//   duration: 1,
// });




// document.querySelectorAll('.client .tab__list .tab__item').forEach(item => {
//   item.addEventListener('click', e => {
//     e.preventDefault();
    
//     const tabName = item.children[0].dataset.tab;

//     // 모든 탭 버튼의 on클래스 제거 후 현재 클릭한 탭에 추가
//     document.querySelectorAll('.client .tab__list .tab__item').forEach(sibling => {
//       sibling.classList.remove('on');
//     });
//     item.classList.add('on');

//     // 모든 탭 콘텐츠에 hide 추가하여 숨김처리
//     document.querySelectorAll('.client .tab__content > *').forEach(tab => {
//       tab.classList.add('hide');
//       tab.classList.remove('on');
//     });

//     // 선택한 탭을 표시
//     document.querySelectorAll(tabName).forEach(tab => {
//       tab.classList.remove('hide');
//       tab.classList.add('on');
//     });

//     // 600ms 후 숨겨진 탭들의 hide 클래스 제거 (애니메이션 후 자연스럽게 표시)
//     setTimeout(() => {
//       document.querySelectorAll('.client .tab__content > *').forEach(tab => {
//         if (!tab.classList.contains('on')) {
//           tab.classList.remove('hide');
//         }
//       });
//     }, 600);
//   });
// });

// // GSAP 애니메이션 적용
// gsap.to(document.querySelector('.client .client__bg img'), {
//   scrollTrigger: {
//     trigger: ".client .client__bg",
//     start: "0% 100%",
//     end: "100% 100%",
//     scrub: 0,
//   },
//   transform: 'translateY(0%)'
// });

// const clientImages = [
//   './assets/images/client_bg1.avif',
//   './assets/images/client_bg2.avif',
//   './assets/images/client_bg3.avif',
//   './assets/images/client_bg4.avif',
//   './assets/images/client_bg5.avif',
//   './assets/images/client_bg6.avif'
// ];

// const clientBg = document.querySelector('.client .client__bg');
// const clientImg = clientBg.querySelector('img');
// let imageCount = clientImages.length;

// clientBg.addEventListener('mousemove', e => {
//   let clientBgWidth = clientBg.offsetWidth;
//   let mouseX = e.pageX - clientBg.getBoundingClientRect().left;
  
//   let index = Math.floor((mouseX / clientBgWidth) * imageCount);
  
//   clientImg.src = clientImages[index];
// });




// const benefit = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".benefit",
//     start: "0% 80%",
//     end: "100% 100%",
//   }
// });

// benefit.from(document.querySelectorAll('.benefit .benefit__letter .letter__text'), {
//   yPercent: 100,
//   stagger: 0.5,
//   duration: 0.8,
// });

// benefit.from(document.querySelectorAll('.benefit .benefit__letter .letter .letter__img'), {
//   scale: 0,
//   delay: 0.5,
//   duration: 1,
// }, '<');

// gsap.to(document.querySelectorAll('.benefit .benefit__content .content'), {
//   scrollTrigger: {
//     trigger: ".benefit .benefit__content",
//     start: "0% 100%",
//     end: "100% 100%",
//   },
//   y: 0,
//   opacity: 1,
//   duration: 1,
// });

// document.querySelector('.plan__toggle').addEventListener('click', e => {
//   e.preventDefault();
//   const checkbox = document.getElementById('toggle');
//   checkbox.checked = !checkbox.checked;
//   checkbox.dispatchEvent(new Event('change'));
// });

// document.getElementById('toggle').addEventListener('change', function () {
//   const projects = document.querySelectorAll('.plan .projects');
//   const subscriptions = document.querySelectorAll('.plan .subscriptions');

//   if (this.checked) {
//     projects.forEach(el => {
//       el.classList.add('on');
//       el.classList.remove('hide');
//     });
//     subscriptions.forEach(el => {
//       el.classList.add('hide');
//       el.classList.remove('on');
//     });

//     setTimeout(() => {
//       subscriptions.forEach(el => {
//         el.classList.remove('hide');
//       });
//     }, 600);
//   } else {
//     subscriptions.forEach(el => {
//       el.classList.add('on');
//       el.classList.remove('hide');
//     });
//     projects.forEach(el => {
//       el.classList.add('hide');
//       el.classList.remove('on');
//     });

//     setTimeout(() => {
//       projects.forEach(el => {
//         el.classList.remove('hide');
//       });
//     }, 600);
//   }

//   ScrollTrigger.refresh();
//   lenis.resize();
// });


// document.querySelectorAll('.faq .faq__more').forEach(faqMore => {
//   faqMore.addEventListener('click', (e) => {
//     e.preventDefault();

//     const faqItem = faqMore.closest('.faq__item'); 
//     const faqAnswer = faqItem.querySelector('.faq__answer');
//     const answerH = faqItem.querySelector('.faq__answer .answer');

//     let isHidden = faqMore.classList.contains('on');

//     // 모든 FAQ 초기화 (기존 열려 있던 것 닫기)
//     document.querySelectorAll('.faq__more').forEach(el => {
//       el.classList.remove('on');
//       // 해당 요소의 형제인 faq__answer 숨기기
//       const siblingAnswer = el.closest('.faq__item').querySelector('.faq__answer');
//       siblingAnswer.style.height = '';
//       siblingAnswer.classList.remove('on');
//     });

//     // 클릭된 요소만 열기
//     if (!isHidden) {
//       faqMore.classList.add('on');
//       faqAnswer.classList.add('on');

//       // 실제 높이를 가져오고 padding을 더해서 적용 (애니메이션 효과)
//       const computedStyle = getComputedStyle(faqAnswer);

//       // 현재 창의 너비를 기준으로 vw 계산
//       const windowWidth = window.innerWidth;
//       const answerHeightInVw = (answerH.scrollHeight) / windowWidth * 100 + 'vw';

//       faqAnswer.style.height = answerHeightInVw;
//     } else {
//       faqAnswer.style.height = '';
//       faqAnswer.classList.remove('on');
//     }

//     setTimeout(() => {
//       ScrollTrigger.refresh();
//       lenis.resize();
//     }, 500)
//   });
// });

// const about = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".about",
//     start: "0% 100%",
//     end: "100% 100%",
//   }
// });

// about.from(document.querySelectorAll('.about .about__letter .letter .letter__text'), {
//   yPercent: 100,
//   stagger: 0.4,
//   duration: 0.7
// });

// about.from(document.querySelectorAll('.about .about__letter .letter .letter__img'), {
//   scale: 0,
//   duration: 0.8,
// }, '<');

// const slides1 = document.querySelectorAll('.flow__slide--first .slide__img');
// const slides2 = document.querySelectorAll('.flow__slide--seconde .slide__img');
// let currentIndex = 0;

// function showNextSlide() {
//   slides1[currentIndex].classList.remove('active');
//   slides2[currentIndex].classList.remove('active');
  
//   currentIndex = (currentIndex + 1) % slides1.length;
//   currentIndex = (currentIndex + 1) % slides2.length;
  
//   slides1[currentIndex].classList.add('active');
//   slides2[currentIndex].classList.add('active');
// }

// setInterval(showNextSlide, 500);



// document.querySelectorAll('.text-up').forEach((el) => {
//   gsap.from(el.querySelectorAll('.line'), {
//     scrollTrigger: {
//       trigger: el,
//       start: "0% 100%",
//       end: "100% 0%",
//     },
//     yPercent: 100,
//     stagger: 0.2,
//   });
// });

// document.querySelectorAll('[data-scroll="parent"]').forEach((el) => {
//   gsap.to(el.querySelectorAll('[data-scroll="child"]'), {
//     scrollTrigger: {
//       trigger: el,
//       start: "100% 100%",
//       end: "100% 0%",
//       scrub: 0,
//     },
//     yPercent: 25,
//     ease: "none",
//   });
// });


// ScrollTrigger.matchMedia({
//   "(min-width: 1280px)": function () {
//     const work = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".work",
//         start: "5% 0%",
//         end: "85% 100%",
//         scrub: 0,
//       }
//     });
//     work.to(document.querySelector(".work .work__video--wrapper .video"), {
//       margin: 0,
//       width: "100%",
//       transform: "translateY(0%)",
//       ease: "none",
//     }, 'work');
//     work.to(document.querySelector(".work .work__content .content .content__video"), {
//       margin: 0,
//       width: "0px",
//     }, 'work');
//     work.to(document.querySelector(".work .work__video--wrapper .video .video__time"), {
//       xPercent: -70,
//     }, 'work');
//     work.to(document.querySelector(".work .work__video--wrapper .video .video__link--all"), {
//       yPercent: -110,
//       delay: 0.1,
//     }, 'work');
//   },

//   "(min-width: 768px)": function () {
//     const loading = gsap.timeline({
//       onComplete: function() {
//         intro.play();
//       }
//     });
//     loading.to(document.querySelector(".loading .loading__dimmed"), {
//       height: 0,
//       duration: 1,
//     });
//     loading.to(document.querySelector(".loading"), {
//       height: 0,
//       duration: 1,
//       ease: "circ.inOut"
//     });
//     loading.to(document.querySelector(".loading .loading__logo"), {
//       scale: 0.7,
//       delay: 0.1,
//       duration: 1,
//     }, '<');

//     const intro = gsap.timeline({
//       paused: true,
//     });
//     intro.from(".overview .overview__content .line-wrap .line", {
//       yPercent: 100,
//       stagger: 0.2,
//       duration: 0.5,
//     }, 'first');
//     intro.to(".overview .overview__flow .flow", {
//       y: 0,
//     }, 'first');
//     intro.to(".overview .overview__pick", {
//       yPercent: -20,
//       opacity: 1,
//       delay: 1,
//     }, '<');
//     intro.to(".header .header__inner", {
//       yPercent: -20,
//       opacity: 1,
//     }, '<');

//     gsap.to(".overview .overview__flow", {
//       scrollTrigger: {
//         trigger: ".overview",
//         start: "48% 100%",
//         end: "100% 100%",
//         scrub: 0,
//       },
//       transform: "translateY(18%)",
//       scale: 1.5,
//     });

//     const work = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".work",
//         start: "0% 10%",
//         end: "100% 100%",
//         scrub: 0,
//       }
//     });
//     work.to(document.querySelector(".work .work__video--wrapper .video"), {
//       margin: 0,
//       width: "100%",
//       transform: "translateY(0%)",
//       ease: "none",
//     }, 'work');
//     work.to(document.querySelector(".work .work__content .content .content__video"), {
//       margin: 0,
//       width: "0px",
//     }, 'work');
//     work.to(document.querySelector(".work .work__video--wrapper .video .video__time"), {
//       xPercent: -70,
//     }, 'work');
//     work.to(document.querySelector(".work .work__video--wrapper .video .video__link--all"), {
//       yPercent: -110,
//       delay: 0.1,
//     }, 'work');
//   },

//   "(max-width: 767px)": function () {
//     const loading = gsap.timeline({
//       onComplete: function() {
//         intro.play();
//       }
//     });
//     loading.to(document.querySelector(".loading .loading__dimmed"), {
//       height: 0,
//       duration: 1,
//     });
//     loading.to(document.querySelector(".loading"), {
//       height: 0,
//       duration: 1,
//       ease: "circ.inOut"
//     });
//     loading.to(document.querySelector(".loading .loading__logo"), {
//       scale: 0.7,
//       delay: 0.1,
//       duration: 1,
//     }, '<');

//     const intro = gsap.timeline({
//       paused: true,
//     });
//     intro.from(".overview .overview__content .line-wrap .line", {
//       yPercent: 100,
//       stagger: 0.2,
//       duration: 0.5,
//     }, 'first');
//     intro.to(".overview .overview__flow .flow", {
//       y: 0,
//     }, 'first');
//     intro.to(".overview .overview__pick", {
//       yPercent: -20,
//       opacity: 1,
//       delay: 1,
//     }, '<');
//     intro.to(".header .header__inner", {
//       yPercent: -20,
//       opacity: 1,
//     }, '<');
//   }
// });


// // 뷰포트 사이즈 변경될 때 service, faq 리스트 닫기
// window.addEventListener('resize', () => {
//   document.querySelectorAll('.faq__more').forEach(el => {
//     el.classList.remove('on');
//     const siblingAnswer = el.closest('.faq__item').querySelector('.faq__answer');
//     siblingAnswer.style.height = '';
//     siblingAnswer.classList.remove('on');
//   });
//   document.querySelectorAll('.service .process__more').forEach(el => {
//     el.classList.remove('on');
//     const siblingSub = el.closest('.service .process__item').querySelector('.service__process .process__sub');
//     siblingSub.style.height = '';
//     siblingSub.classList.remove('on');
//   });

//   setTimeout(() => {
//     ScrollTrigger.refresh();
//     lenis.resize();
//   }, 500);
// });










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


$('.plan__toggle').click(function (e) {
  let checkbox = $('#toggle');
  checkbox.prop("checked", !checkbox.prop("checked")).trigger("change");
  e.preventDefault();
});

$('#toggle').change(function () {
  if ($(this).is(':checked')) {
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

  ScrollTrigger.refresh();
  lenis.resize();
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