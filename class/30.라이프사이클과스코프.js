// 변수나 함수는 스코프라는 공간에 생성된다
// 글로벌 스코프(전역 스코프), 함수 스코프, 블럭 스코프 세종류로 나뉜다

let myname = 'kim'; // 전역스코프에 변수를 생성

function foo() {
    let x = 10; // 함수 스코프에 변수를 생성

    console.log(myname); // 함수 스코프는 전역 스코프의 일부이므로 출력이 가능
    console.log(x);

    bar(); // 자바스크립트는 호이스팅이라는 매커니즘으로 인해 함수가 이미 만들어져 있으므로 호출이 가능하다.

    // zoo(); // 함수식은 호이스팅이 적용되지 않는다.

    function bar() {
        let y = 10;

        console.log(x);
        console.log(myname);
    }

    const zoo = function () {

    }

    // console.log(y); // error 바깥에서 안쪽의 변수를 접근할수없음.

    if (x === 10) {
        let x = 100; // 스코프에서 변수를 찾을땐 현재 자기 자신이 있는 스코프에서 찾고 찾아지지 않으면 바깥의 스코프에서 찾는다. 프로토타입과 유사함

        console.log(x);
    }

    bar();
}

foo();
