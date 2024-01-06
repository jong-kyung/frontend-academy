interface Container {
    tagName: string;
    className: string;
    children?: string[];
    getTagName: () => string;
    getClassName: () => string;
}

abstract class Shape { // 추상화 클래스
    public static MIN_BORDER_WIDTH = 0; // static: 정적상태, 인스턴스 객체에 포함되지 않는 Shape 클래스에 연결되어 있는 속성이라는 의미. 즉 인스턴스들끼리 관계가 없이 특정 클래스가 포함하고 있는 데이터나 메소드인 경우 사용
    public static MAX_BORDER_WIDTH = 30;

    public readonly name: string = 'Shape'; // readonly를 통해 name을 보호
    protected _borderWidth: number; // protected는 shape클래스와 자식클래스 모두 사용 가능함.
    private action!: string; // private은 shpae클래스 자체 내에서만 사용됨, !는 값을 세팅하지 않아도 된다는 지시어이다.

    constructor(borderWidth: number = 0) {
        this._borderWidth = borderWidth;
    }

    abstract area: () => number; // 추상 메서드, 추상클래스인 경우에만 사용 가능, 스펙 정의만 되어있음 자식이 상속받을경우 무조건 구현하라는 의미.

    set borderWidth(width: number) {
        if (width >= Shape.MIN_BORDER_WIDTH && width <= Shape.MAX_BORDER_WIDTH) {
            this._borderWidth = width;
        } else {
            throw new Error('borderWidth 허용 범위를 벗어난 동작을 시도했습니다.');
        }
    }

    get borderWidth(): number {
        return this._borderWidth;
    }
}

class Circle extends Shape { // Shape이라는 super 클래스를 상속
    private _radius: number // private를 통해 radius를 보호
    public name: string = 'Circle'; // override(재정의)


    constructor(radius: number) {
        super(); // super는 부모를 뜻한다. 상속받을경우엔  무조건 사용해주어야함 그래야 부모의 생성자가 작동된다.
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    area = () => this._radius * this._radius * Math.PI;
}

class Rect extends Shape {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        super();

        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    area = () => this._width * this._height;
}

const circle = new Circle(50);
const rect = new Rect(150, 200);

console.log(rect.borderWidth);
console.log(rect.name);
console.log(circle.name);

try {
    rect.borderWidth = 10;
} catch (e) {
    console.error(e);
}

class MyContainer implements Container { // implements를 이용하여 클래스의 설계를 제한
    private name: string; // 인터페이스에는 퍼블릭 속성만 정의해서 작성한다. 따라서 내부적으로 보호하는 private이 추가되어도 오류가 발생하지 않는다.
    tagName: string;
    className: string;

    constructor(tagName: string, className: string) {
        this.tagName = tagName;
        this.className = className;
    }

    getTagName = () => this.tagName;
    getClassName = () => this.className;
}

console.log('done');