type MyObject = { // 타입스크립트에선 타입지정을 통해 delete로 속성이 삭제되는것을 방지한다.
    name: string;
    age: number,
    getFamilyName: () => string;
    getLastName: () => string;
    getBloodType: () => string;
}

// 내용이 함수면 메서드이고 데이터면 속성이라 부른다.
const obj: MyObject = {
    name: 'code',
    age: 20,
    getFamilyName: function () {
        return 'Kim'
    },
    getLastName: () => 'Kim', // arrow function으로 축약
    getBloodType() { // 축약형 문법
        return 'O'
    },
}

obj.name;
obj.age;
// obj.bloodType = 'A';
// delete obj.bloodType; // delete를 통해 생성된 bloodType 속성을 제거할 수 있음
obj.getFamilyName();

//* class를 통해 객체 생성
class Person {
    _bloodType: string;

    constructor(bloodType: string) {
        this._bloodType = bloodType;
    }

    set bloodType(bType: string) { // setter
        if (bType === 'A' || bType === 'B' || bType === 'O' || bType === 'AB') {
            this.bloodType = bType;
        }
    }

    get bloodType() { // getter
        return this._bloodType;
    }
}

const p1 = new Person('B');

p1.bloodType; // getter와 setter를 사용하면 함수인데 속성을 부르는것처럼 사용할 수 있다.
p1.bloodType = 'C';


//* create를 통한 객체 생성
const myObj = Object.create(null, {
    name: {
        value: 'kim code',
        writable: true, // true로 설정하면 값을 변경할 수 있음
        configurable: false, // 속성을 제거할 수 없게 설정할 수 있음.
    }
}) // 첫번쨰 인자는 부모 객체가 들어간다.

myObj.name