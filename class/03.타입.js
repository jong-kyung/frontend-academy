//* 자바스크립트의 변수타입은 실제로 값을 넣는 순간 결정이 되는 구조이다. 즉, 들어가는 시점에 타입이 결정됨.
function addAge(age) {
    if (typeof age === 'number') { // 버그를 방어하기 위한 방어코드를 매번 작성해야하는 문제가 있음.
        return age + 1;
    } else {
        throw 'ERROR';
    }
}

var age = addAge('30');

console.log(age);
