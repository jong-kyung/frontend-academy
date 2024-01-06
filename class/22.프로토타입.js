const c1 = {
    name: 'C1',
    color: 'red',
}

const c2 = {
    name: 'C2',
    width: 300,
}

const c3 = {
    name: 'C3',
    height: 100,
}

c1.__proto__ = c3; // c1의 prototype에 c2를 추가함
c3.__proto__ = c2;

console.log(c1)
console.log(c2)
console.log(c3)

console.log(c1.width); // c2의 width가 출력됨


Object; // 최상위 Object

console.log(c1.toString()); // 프로토타입 체이닝 덕분에 toString메서드가 정의되어 있지 않지만 사용가능

function Foo(name) {
    this.name = name;
    this.__proto__ = Foo.prototype; // new 키워드를 통해 인스턴스 객체를 생성함과 동시에 __proto__와 prototype을 연결짓는게 내부적으로 작동한다.
}

Foo.prototype.lastName = 'code'; // prototype속성은 객체로서 Foo함수 그 자체를 나타내고 있음.

const f = new Foo('Kim'); //

console.log(f.name);
console.log(f);
console.log(f.lastName);