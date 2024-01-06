//* 자바스크립트에서는 변수를 보호하기 위해 클로저라는 공간을 생성한다. 클로저(closure)는 함수 안쪽에서 함수가 만들어질 때, 함수 안쪽에 있는 코드중에 함수 바깥에 있는 변수에 접근하게 되면 클로저라고 하는 특별한 공간에 저장하게 된다.

function increment() {
    let saveNumber = 1;

    return function () {
        return saveNumber++; // 클로저라는 공간에 saveNumber가 저장됨.
    };
}

const inc = increment();

console.log(inc());
console.log(inc());
console.log(inc());

//* 타입스크립트에서 변수를 보호하는 방법
// class MyObj {
//     private saveNumber: Number;
// }