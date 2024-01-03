const colors = ['red', 'yellow', 'black']
const Colors = {
    blue: 'blue',
    green: 'green',
    white: 'white'
}

// const red = colors[0];
// const yellow = colors[1];
// const black = colors[1];

//* 구조분해할당(디스트럭팅), 실무에서 가장 많이 사용됨.
// const [red, yellow, black] = colors;
const [yellow] = colors;
const { white, green } = Colors;

//* 비교연산자
let a = 10;
let b = '10';

if (a == b) { // 동등연산자, true

}

if (a == b) { // 일치연산자, false

}

//* 삼항연산자
if (a === b) {
    a = 0;
} else {
    a = 1;
}

a = (a === b) ? 0 : 1;

// 괄호는 특별하게 값으로 만들고 싶은게 있을때 사용함.
(function foo() {

}) // 괄호로 감싸줌으로 인해 함수 정의문이 값으로 변경됨 따라서 변수에 할당할 수 있게됨.