//* if문
let age = 10;

//! 모든 객체는 true로 판정함.
if (age === 10) { // 단일 if문이면 중괄호를 생략할 수 있으나, 일반적으로 컨벤션에선 생략하지 않는 것을 권고함.
    console.log("나이는 10세");
} else if (age === 20) {
    console.log("나이는 20세.");
} else {
    console.log("모르겠습니다.");
}

//* switch문
// switch문은 매칭하는지 확인할때 많이 사용함. 또한 각 case별로 break를 꼭 작성해주어야함
age = 1;
switch (age) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log('??');
        break;
}