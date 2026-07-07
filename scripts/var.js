/* var.js */
// 한 줄 주석(ctrl + /)
/* 여러 줄 주석(shift + ctrl + A) */
// 변수와 함수
// 변수키워드 변수명 대입연산자 대입값;
// 함수생성키워드 함수명(){실행결과;}
let user_name = '홍길동';
let user_pw = '1234';
function func1(){// 생성과 준비
    console.log(user_name); // 유지보수(생성을 하기 위한 준비)를 위한 거
    console.log(user_pw); // 몇 줄을 쓰든 명령 하나만 쓰면 됨
}//함수 준비 끝 위치
func1(); // (함수 호출)반복되는 걸 함수로 만들고 명령하는 걸 함수만 사용해서 나중에 고치기 쉽게 하기

// 목표) 원하는 영화명(토이스토리)을 검색하고 `검색하기 버튼을 누르면(이벤트)` 영화명, 개봉일이 콘솔에 출력
// 데이터 == 변수
const movie_name = '토이스토리';
const movie_date = '2026.07.07';
// 반복 실행 == 함수
function movie_search(){
    console.log(movie_name);
    console.log(movie_date);
}
movie_search();

// 목표) 노트북 검색하기 버튼을 클릭하면 삼성 노트북, 15인치 정보가 콘솔에 출력
// 변수, 함수명 참고) 노트북 모델명, 노트북 크기, 노트북 검색
const notebook_name = '삼성 노트북';
const notebook_size = '15인치';
function notebook_search(){
    console.log(notebook_name);
    console.log(notebook_size);
}
notebook_search();

// 목표) 여행 검색하기를 클릭 시 여행지/가격/특산물 정보 콘솔 출력
// 강릉/20만원/감자빵
const area_name = '강릉';
let area_cost = '20만원';
let area_food = '감자빵';
function area_trip(){
    console.log(area_name);
    console.log(area_cost);
    console.log(area_food);
}
area_trip()