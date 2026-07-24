/* animation02.js */
// ------------------------------------------------ gnb + snb
// 1. 서브 메뉴 초기 숨기기
// 2. 메인 메뉴 클릭(터치)하면 서브 메뉴 보이기
const gnbLi = document.querySelector ('.gnb > ul > li:nth-child(2)');
const snb = document.querySelector ('.gnb .snb');

console.log(gnbLi, snb);

snb.style.display = 'none';

gnbLi.addEventListener('click', gnbLiClick);

function gnbLiClick() {
    snb.style.display = 'flex';
}