function calculateCircleArea(radius) {
    return radius * radius * Math.PI;
}

function calculateRectArea(width, height) {
    return width * height;
}

// circle 클래스
class Circle {
    #radius; // 타입스크립트의 private과 같이 자바스크립트에서는 #을 사용하면 클래스의 속성을 보호해줌.

    constructor(radius) {
        this.#radius = radius;
    }
    get radius() {
        return this.#radius;
    }

    area = () => this.#radius * this.#radius * Math.PI;
}

// rect 클래스
class Rect {
    #width;
    #height;

    constructor(width, height) {
        this.#width = width;
        this.#height = height;
    }

    get width() {
        return this.#width;
    }

    get height() {
        return this.#height;
    }

    area = () => this.#width * this.#height;
}

const circle = new Circle(50);
const rect = new Rect(150, 200);



//* 사용하는쪽에서 어떻게 사용되는가에 따라 다름
// 함수로 작성되는경우엔 어떤 값을 넘겨주어야하는지 사전에 알고 있어야함. 즉 사용자의 입장에선 알아야할 정보가 많아지는 문제 초래
console.log(calculateCircleArea(circle.radius));
console.log(calculateRectArea(rect.width, rect.height));

// 객체내 메서드로 작성되는경우엔 어떤 값을 넘겨주어야하는지 알아야할 필요는 없음 따라서 편리하게 사용됨.
console.log(circle.area())
console.log(rect.area())

// rect.#width; // error