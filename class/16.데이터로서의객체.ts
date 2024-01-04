// 객체 문법
type Box = {
    width: number;
    height: number;
    borderRadius: number;
    backgroundColor: string;
    borderWidth?: number;
    color?: string; // 타입스크립트는 옵셔널로 설정해주어야함
    ['className']?: string; // computed Property 
}
//* 객체 리터럴, 코드 표기법으로 객체를 생성
let box: Box = {
    width: 200,
    height: 200,
    borderRadius: 5,
    backgroundColor: 'red',
}

//* 함수로 객체 생성
function makeBox(
    width: number,
    height: number,
    borderRadius: number,
    backgroundColor: string,
): Box {
    return {
        width,
        height,
        borderRadius,
        backgroundColor
    };
}

makeBox(100, 100, 0, 'blue');

//* 클래스로 객체 생성
class Shape implements Box {
    width: number;
    height: number;
    borderRadius: number;
    backgroundColor: string;

    constructor(
        width: number,
        height: number,
        borderRadius: number,
        backgroundColor: string,
    ) {
        this.width = width;
        this.height = height;
        this.borderRadius = borderRadius;
        this.backgroundColor = backgroundColor;
    }
}

const boxShape = new Shape(10, 10, 0, 'blue'); // 인스턴스객체 생성

// if (boxShape instanceof Shape) { // Shape로 만든 인스턴스 객체인지 확인함

// }


box.borderRadius = 10; // 객체 값 변형
box['className'] = 'box rounded'; // 객체 값 변형
box.color = 'blue'; // 객체의 값을 추가(자바스크립트에서는 동적 바인딩을 해준다.)
delete box.color; // 객체의 속성을 삭제

const box1 = box; // 값을 참조하게 설정, 원본이 바뀌지 않음

//* 새로운 객체로 만드는 방법
const box2 = Object.assign({}, box); // 첫번째 인자에 입력된 객체에 두번째 세번째 ...인자들을 오버라이딩하여 새로운 객체를 반환한다
const box4 = { ...box, color: 'blue' }; // 전개 연산자를 통해 복사
const box3 = JSON.parse(JSON.stringify(box)); // JSON을 통해 원본과 연결을 끊은 이후 다시 객체로 변환시킴