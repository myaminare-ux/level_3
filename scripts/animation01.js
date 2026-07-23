/* animation01.js */
// item1에 마우스를 올리면 img 태그 경로가 다른 이미지로 변경

// 변수
const item1 = document.querySelector('.item');
const item1Img = document.querySelector('.item img');
const item2 = document.querySelector('.sale');
const item2Img = document.querySelector('.sale img');

// 변수 테스트
console.log(item1, item1Img);
console.log(item2, item2Img);

// 이벤트
item1.addEventListener('mouseover', itemImgSrc)
item1.addEventListener('mouseout', itemImgSrcBack)
item2.addEventListener('mouseover', saleImgSrc)
item2.addEventListener('mouseout', saleImgSrcOut)

// 함수
function itemImgSrc() {
    item1Img.src = 'https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/ce706b94-b20e-406e-a512-7032bc173c24.jpg';
}
function itemImgSrcBack() {
    item1Img.src = 'https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/c4d41015-d188-4c68-b3e9-36968bf2110a.jpeg';
}
function saleImgSrc() {
    item2Img.src = 'https://image.uniqlo.com/UQ/ST3/kr/imagesgoods/487394/item/krgoods_19_487394_3x4.jpg?width=300';
}
function saleImgSrcOut() {
    item2Img.src = 'https://image.uniqlo.com/UQ/ST3/kr/imagesgoods/487394/item/krgoods_60_487394_3x4.jpg?width=300';
}