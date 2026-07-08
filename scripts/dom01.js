/* dom01.js */
// 목표) 글쓰기 CTA(고정) 버튼 클릭 시 글쓰기 팝업 실행되는 기능
// 1. 팝업, 뒷배경 숨기기
// 1-1. 팝업, 뒷배경 자바스크립트 객체 등록(변수)
const popup = document.querySelector('.write_popup');
const popup_bg = document.querySelector('.popup_bg');
// 콘솔 변수 출력해서 변수가 정상인지 확인
// null : 변수에 데이터가 존재하지 않는다.
console.log(popup);
console.log(popup_bg);
// 자바스크립트에서 스타일(css) 수정하기
// 스타일(css) == 자바스크립트의 속성
// 객체.함수()
// 객체.속성
// 객체.style.css속성=값;
// popup.style.border = '1px solid red';
// popup.style.backgroundColor = 'yellow';
// popup.style.fontSize = '2em';
// popup.style.padding = '15px 30px';
popup.style.display = 'none';
popup_bg.style.display = 'none';
// 2. CTA 클릭 시 위 1번 대상 보이기
// 팝업 실행 목적 함수 생성
// function 함수명(){반복 실행되는 내용}
function popupShow(){
    /* 보이는 작업 처리 시 원래 객체가 가지던 css display 속성으로 되돌린다. */
    /* 후보군 : flex, block, inline, inline-block */
    popup.style.display = 'block';
    popup_bg.style.display = 'block';
}
function popupHide(){
    popup.style.display = 'none';
    popup_bg.style.display = 'none';
}