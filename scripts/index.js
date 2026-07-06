// 자바스크립트
// 자바스크립트는 반드시 객체(변수)부터 준비해야 한다.
// 변수 종류 : var, let, const
// 변수 작성 문법 : 변수종류 변수명 대입연산자 대입값;
// 기초 - 상황 연습
// 1. 김치 담을 반찬통 준비
let bowl; // 빈 변수
// 2. 김치 담기
bowl = '김치'; // 김치라는 데이터가 담긴 변수
// 3. 김치를 사과로 바꾸기
bowl = '사과'; // 김치(기존값 자동 제거), 사과(새로운 객체)
// 1. 고기 담을 반찬통 준비
let meat_bowl;
// 2. 고기 담기
meat_bowl = '고기';
// 객체, 함수 작성법
// 자바스크립트의 작성 규칙은 대부분 객체로 시작한다.
// 객체.속성;
// 객체.함수();
// 객체란? 사용자(개발자)가 제어하고 싶은 대상
console.log(bowl); // 디버깅 용도
console.log('bowl변수에 저장된 데이터는 ', bowl);
console.log('bowl변수 : ', bowl);
console.log('bowl변수 => ', bowl);
// 따옴표('')에 묶인 데이터는 단순 문자 데이터
// 따옴표에 묶지 않은 데이터는 동적인 객체 또는 변수
console.log('1+1');
console.log(1+1);
console.log('1+1=', 1+1);
console.log('----------------------------------------')
let user_name; // user_name 빈 변수 생성
let user_age;
user_name = '이영희'; // user_name 문자값 대입
user_name = '이영이'; // 기존 이름 제거, 새로운 대입
// name은 자바스크립트의 예약어라 변수명으로 사용 불가
console.log(user_name);
// const는 생성과 대입이 반드시 동시에 이루어져야 한다.
const user_number = '123456-78901234';
// user_number = '123456-1234567'; // 변경 시도 오류
console.log(user_number);

user_age = 20; // 숫자로 인식하기 위해 따옴표 X
console.log('20'+1); // 201
console.log(20+1); // 21
// 올해 나이는 20, 내년 나이는 21
// 변수로 저장한 데이터는 출력 시 변수로 사용해야 한다. (변수로 만들지 않으면 따옴표 쓰기)
user_age = 21; // 기존 20 버리고 21 대입
console.log('올해 나이는',user_age, '내년 나이는',user_age+1);