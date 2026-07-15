# 자바스크립트 & 제이쿼리
## 프로젝트 제작 시 항상 준비해야 하는 파일, 폴더 순서
1. 프로젝트 **폴더명 영문으로 의미있게** 작성하기
2. `index.html`, `README.md` 생성
3. `styles`, `scripts`, `images` 폴더 생성
4. `styles/reset.css`, `styles/index.css` 생성
5. `scripts/index.js` 생성
## 자바스크립트
### 객체, 속성, 이벤트, 함수
* 객체 : 웹&앱에서 사용하는 실제 대상(버튼, 링크, 이미지 등), 보통 변수로 데이터(객체)를 저장해서 사용
* 이벤트 : 웹&앱을 이용하는 사용자의 행동(클릭, 터치, 드래그 등)
    * `<button onclick="클릭 시 실행되는 함수">`
* 함수 : 2번 이상 반복되는 실행 내용
    * 함수 생성과 호출을 각각 다르게 구분함
    * 함수 생성 : `function 함수명(){함수 호출 시 반복 실행 할 내용;}` 생성만으로는 절대 결과가 실행되지 않음, 반드시 호출 별도로 진행해야 함!
    * 함수 호출 : 위 함수 생성 바깥쪽에 `함수명()` 작성, 이벤트와 함께 사용하기도 함 `onclick="함수명();"`
### 변수 (데이터를(객체) 저장하는 저장소)
* 변수키워드 변수명 대입연산자 대입값
* `let user_name = '홍길동';`
// user_name 이란 변수를 생성해서(let user_name) '홍길동'이라는 데이터를 대입한다.(= '홍길동';)
1. `var` : 오래된 선언 방식, 이름 중복 가능
2. `let` : 이름 중복 불가능, 재사용(수정) 가능
3. `const` : 이름 중복 불가능, 재사용(수정) 불가
### 객체, 속성, 함수 작성 문법
* 태그 예) `<a href="./index.html"></a>`
* 태그 예) `<video src="./cat.mp4" autoplay>`
* `객체.속성`
    * 객체의 속성 읽기
    * `a.href;`
    * `video.src;` / `video.autoplay;`
    * `span.textContent;` // span 태그 안 내용을 읽음 <span>내용</span>
    * `input.value;` // value는 input 전용 속성으로 다른 태그에 사용 불가
* `객체.속성 = '값';`
    * 객체의 속성 값을 대입한다
    * 대입 시 기존값이 있으면? 기존값은 자동 제거되고 새로운 값이 대입
    * `a.href = './reset.css';`
    * `video.src = './dog.mp4';` / `video.autoplay = '0';`
    * `<span>0</span>` // span의 내용 0을 -> 1로 변경
        * `span.textContent = 1;` // span 원래 내용은 제거하고 1 새로 대입
        * `span.textContent = span.textContent+1;` // 기존 내용에 +1 대입(span의 내용(0)에 1을 더한 값(0+1)을 span의 내용에 대입)
    * `<input type="text" value="1">` // input의 내용 1 -> 2로 변경
        * `input.value = 2;` // input의 원래 내용은 제거하고 2 새로 대입
        * `input.value = input.value+2;` // 기존 input의 값에 +2 대입(value의 원래 내용(1)에 2를 더한 값(1+2)을 value의 내용에 대입)
* `객체.함수();`
    * 객체를 실행한다
    * `객체.함수() = '값';` (X)
* `이벤트="함수();"`
    * 이벤트 동작 시 특정 함수를 실행한다.
    * `<태그 onclick="func1()";>` // 함수 호출
    * 위 작성 전 준비사항 : `function func1(){반복 실행 명령}` // 함수 생성
## DOM(document object model)
### JS에서 제어하고 싶은 HTML 요소가 있을 경우 순서
1. 제어하고 싶은 HTML 수와 class, id 등 확인
2. 용도에 맞게 변수명 생성 `const 변수명`
3. 2번 변수에 대입 연산자로 객체 대입하기
    * `document.querySelector('HTML 대상');`
    * `const 변수명=document.querySelector('대상');`
4. 안전한 작업을 위해 콘솔로 변수 체크하기
    * `console.log(검사하고 싶은 변수명);`
    * 콘솔 결과 화면에서 `null` 또는 오류가 없는지 확인
    * `null`이 뜬다면 HTML script 작성 위치로 가서 defer 속성 추가
        * `<sctipt src="경로" defer></sctipt>`
## 실제 요소 크기와 관계없는 다양한 디자인 포인트 만드는 방법
### css의 가상 선택자(실제 태그 없이 가상의 요소를 만든다.)
### after, before
* `선택자::after`
* `선택자::befroe`
* 가상 선택자의 필수 속성 : `content`, `display`, `width`, `height`, `position`
### 작성 예시
`선택자::after{`
    `content::'';`
    `display:block`
    `wdith:가로 크기px; height:세로 크기px;`
    `position:absolute; left right top bottom 등의 위치 좌표 추가 작성`
`}`
* after, before가 적용된 선택자에 `position:relative;` 기준 잡기
# form 태그 관련 요약
## form 태그와 action, method
* `form` : 검색, 로그인, 회원가입 등의 특정 주제로 묶여있는 그룹
<!-- (사용자가 실제로 입력하고 그 입력한 값이 웹&앱에 전송되는 범위를 지정하는 역할) -->
* `action` : 그룹에 작성 또는 선택된 사용자 정보를 전달하는 서버 주소
<!-- (입력 받은 데이터의 전송할 곳의 주소(장소)) -->
* `methood` : 데이터를 보내는 전송 방식(get, post(보안))
<!-- (데이터를 서버로 전송하는 방식 지정
    * get(주소창에 공개 가능), post(보안이 필요한 내용에 쓰이므로 주소창에 공개 불가능))  -->
## input태그와 type
* `input` : 사용자가 입력 또는 선택할 때 작성하는 시작 태그 (type 필수)
<!-- 사용자가 직접 입력이 가능한 입력창 or 직접 선택이 가능한 선택지 -->
* `type` : **작성 종류에 따라** type 선택
    * 입력 양식 - type : text, password, tel, email, number search 등
    * 선택 양식 - type : radio, checkbox, select, option 등
## name
* action으로 저장된 사이트 서버 위치에 사용자가 입력한 데이터를 전송할 때 구분하는 데이터 명칭
    * 이름 tom, 아이디 tom 값만 보고 구분을 정확히 못하는 경우 name 필수
    * userName => tom, userId => `name="userName"`
    * 선택 양식에서는 name의 의미를 그룹명으로 사용, 위 작성 내용은 입력 양식에 해당
* form, input-입력 양식 : 서버에 전송되어 입력값을 구분할 수 있게 붙이는 이름
* input-선택 양식 : 하나의 공통된 그룹명
## value
* `input - 입력 양식` : 처음부터 입력된 초기값(예-쇼핑몰의 수량 1) 
<!-- 입력되어 있는 기본값 -->
* `input - 선택 양식` : 데이터 구분 목적(본래 name이 쓰이는 목적과 동일)
## id, class
* js, css에서 구분하기 위한 디자인 또는 동적 프로그래밍 용도 이름
* id : 중복이 불가능한 이름
* class : 중복이 가능한 이름