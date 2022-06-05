const searchEl = document.querySelector('.search'); 
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

// search input 포커스 실행 
searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

// search input 포커스 해제(blur)
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});


/**
 * 올해가 몇 년도인지 계산
 */
 const thisYear = document.querySelector('.this-year')
 thisYear.textContent = new Date().getFullYear()
 