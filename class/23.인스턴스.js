//* 함수를 이용한 인스턴스 객체 생성
function CartV1() {
    this.cart = [];
    this.currentId = 0;
}

CartV1.prototype.getNewId = function () { // 인스턴스 객체에 나타나게 될 메서드
    this.currentId++;
    return this.currentId;
}

CartV1.createItem = function (name, price) { // 인스턴스 객체에 드러나지는 않는 메서드
    return { name, price }
}

CartV1.prototype.addItem = function (item) {
    this.cart.push({
        ...item,
        id: this.getNewId(),
    });
};

CartV1.prototype.clearCart = function (item) {
    this.cart = [];
    this.currentId = 0;
};

const shoppingCartV1 = new CartV1();

shoppingCartV1.addItem(CartV1.createItem('수박', 8000));
shoppingCartV1.addItem(CartV1.createItem('사과', 12000));
shoppingCartV1.addItem(CartV1.createItem('두부', 2000));

console.log(shoppingCartV1.cart);

//* 클래스를 이용한 인스턴스 객체 생성
class CartV2 {
    static createItem = (name, price) => ({
        name, price
    });

    cart;
    currentId;

    constructor() {
        this.currentId = 0;
        this.cart = [];
    }

    getNewId = () => {
        this.currentId++;
        return this.currentId;
    }

    addItem = item => {
        this.cart.push({
            ...item,
            id: this.getNewId(),
        });
    }

    clearCart = () => {
        this.currentId = 0;
        this.cart = [];
    }
}

const shoppingCartV2 = new CartV2();

shoppingCartV2.addItem(CartV2.createItem('수박', 8000));
shoppingCartV2.addItem(CartV2.createItem('사과', 12000));
shoppingCartV2.addItem(CartV2.createItem('두부', 2000));

console.log(shoppingCartV2.cart);