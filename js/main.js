

// header 뱃지 스크롤 이동시 사라지게하는 효과
//querySelector 함수
const badgeEl = document.querySelector('header .badges');

//lodash cdn 사용하려고 > 메소드 throttle 스크롤에대한 제약을 걸었음.
//_.throttle(함수, 시간) 300:3초 
window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        //배지를 숨김
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity:0,
            display: 'none' //요소가 위치가 없도록
        });

        
    } else {
        //배지 보이게
        // badgeEl.style.display = "block";
        gsap.to(badgeEl, .6, {
            opacity:1,
            display: 'block'
        });
    }
}, 300));



// 메인 비주얼 영역 animation
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, //순차적으로 (index + 1) *
        opacity : 1
    });
});



// 공지사항 swiper
//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical', //슬라이드 방식(수직) : horizontal (수평 // 기본 : 사용하려면 따로 명시X)
    autoplay : true, //자동 재생 여부
    loop : true //반복 재생 여부
});


//프로모션 swiper
new Swiper('.promotion .swiper-container', {
  slidesPerView : 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween : 10, // 슬라이드 사이 여백
  centeredSlides : true, // 1번 슬라이드가 가운데 보이기
  loop : true, //반복 재생 여부
  autoplay : {
      delay : 500
  },
  pagination : {
      el : '.promotion .swiper-pagination', //페이지 번호 요소 선택자
      clickable : true //사용자의 페이지 번호 요소 제어
  },
  navigation : {
      prevEl : '.promotion .swiper-prev', //이전 버튼
      nextEl : '.promotion .swiper-next'  //다음 버튼
  }
})

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion //! = not
    if (isHidePromotion) {
        //숨김처리!
        promotionEl.classList.add('hide');
    } else {
        //보임처리!
        promotionEl.classList.remove('hide');
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

//플루팅 둥둥 떠있는 js
function floatingObject(selector, delay, size){
    gsap.to(
        selector, //선택자
        random(1.5, 2.5), //애니메이션동작시간
        { // 옵션
            y: size,
            repeat : -1, //repeat:-1 무한반복
            yoyo : true, //반대로도 한번 더 (ex: 아래로 내려왔으면 위로 올라가게)
            ease: Power1.easeInOut, //애니메이션 효과 
            delay : random(0, delay)
         }
    );
}

//변수명(선택자, 지연시간, 위아래 범위)
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


//Scence 감시하는 메소드 (감시할때 필요한 요소들을 추가하면됨.)
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
    //new ScrollMagic.Scence().setClassToggle().addTo();
    new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})

//푸터 spwier
new Swiper('.awards .swiper-container', {
    autoplay :true,
    spaceBetween: 30,
    slidesPerView :5,
    navigation : {
        prevEl : '.awards .swiper-prev', //이전 버튼
        nextEl : '.awards .swiper-next'  //다음 버튼
    }
});

const toTopEl = document.querySelector('#to-top')
// 페이지에 스크롤 이벤트를 추가!
// 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 줌)
window.addEventListener('scroll', _.throttle(function () {
  // 페이지 스크롤 위치가 500px이 넘으면.
  if (window.scrollY > 500) {
    // 상단으로 스크롤 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    })

  // 페이지 스크롤 위치가 500px이 넘지 않으면.
  } else {
    // 상단으로 스크롤 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300))
// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener('click', function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, .7, {
    scrollTo: 0
  })
})

