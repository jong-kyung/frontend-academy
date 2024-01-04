/* 함수의 기본적인 역할은 어떤 목적의 계산을 하는 코드를 묶는 것이다. */
function myFn(x) { // 함수의 선언
    return x + 100; // 값 반환
}

//* 가변인자 적용, 유사배열(arguments) 과거 방식
function sum() { // 인자를 작성을 해도 모든 인자들은 arguments에 저장됨
    let s = 0;

    for (let i = 0; i < arguments.length; i++) {
        s = s + arguments[i];
    }

    return s;
}

//* 가변인자 적용, 전개 파라미터(rest parameter), 최신 방식
function sum(a, b, ...args) { // 인자를 작성을 하면 인자들이 적용된 후 나머지 인자들이 args에 들어가게 됨.
    let s = 0;

    for (let i = 0; i < args.length; i++) {
        s = s + args[i];
    }

    return s;
}

const result = myFn(10); // 함수의 호출, 함수는 기본적으로 인자를 안넣어주거나 정해진 수 이상으로 넣어주어도 호출은 된다.
const absSum = sum(10, 20, 30);

//* 이름 없는 함수(값으로의 함수)
const myFnV2 = function () {
    return 100;
}; // 식이므로 세미콜론을 작성해주어야함

myFnV2(); // 익명함수의 호출

//* call을 통한 함수 호출, 첫번째 인자로 context 객체를 받음. 
sum.call(null, 10, 20, 30);

//* apply를 통한 함수 호출, 첫번째 인자로 context 객체를 받음, call방식과 일반적인 호출방식과 달리 배열로 인자를 받는다.
const arr = [10, 20, 30];
sum.apply(null, arr);

//* 즉시 실행 함수
(function () {
    console.log('즉시 실행 함수 실행')
})();

//* 화살표 함수(arrow function), 기본적으로 익명함수이다, 한줄함수라고도 불린다.
const sumV2 = (a, b, ...args) => {
    let s = 0;

    for (let i = 0; i < args.length; i++) {
        s = s + args[i];
    }

    return s;
}

const ten = x => 100 + x; // 인자가 하나 일때 괄호 생략이 가능하고 코드가 한줄이면 중괄호와 return도 생략이 가능함.

//* 생성기 함수(generator function)
// 최초에 호출을 하면 함수가 실행되지 않고 실행 준비 상태로 만들고 객체를 반환한다 그 객체 안에는 함수를 실행할 도구를 담은 객체를 반환함.
function* gen() {
    yield 10;
    yield 20;
    return 30;
}

const g = gen(); // g라는 상수에는 generator를 제어할 객체가 반환된다. 이 객체에는 하나의 메서드가 존재하는데 그 메서드는 next 메서드(함수)이다.
g.next(); // 제너레이터 함수의 실행;
g.next();
g.next();

//* 비동기 함수
async function myTask() {
        
}