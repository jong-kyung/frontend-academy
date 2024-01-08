/*
문자열 포맷: id,item,price,discount
*/

const cartItems = [
    { id: 1, item: '핸드밀', price: 40000, discount: 0, },
    { id: 2, item: 'A4용지', price: 4000, discount: 0, },
    { id: 3, item: '수영복', price: 120000, discount: 0, },
    { id: 4, item: '색연필72색', price: 150000, discount: 0, },
];

//* 전통적인 반복문을 이용한 형변환
const cartItemsArray = [];
for (const item of cartItems) {
    const row = [];

    // ['id', 1]
    for (const [, value] of Object.entries(item)) { // entries를 통해 key, vlaue를 짝으로 만든 배열을 리턴함
        row.push(value);
    }

    cartItemsArray.push(row.join());
}

console.log(cartItemsArray.join('==='));

//* 배열연산을 통한 형변환
const extractValueInObject = obj => Object
    .entries(obj)
    .map(([, value]) => String(value));


const cartItemString = cartItems
    .map(extractValueInObject)
    .join('===');

console.log(cartItemString);