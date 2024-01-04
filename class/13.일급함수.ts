// 일급 함수는 프로그래밍 언어에서 함수라고 하는 코드의 묶음을 일반적인 값처럼 취급하는 개념을 뜻한다. 즉 함수자체를 값으로 취급하여 변수에 넣을 수 있음.

//* 인자로 전달되는 함수
function ul(child: string): string {
    return `<ul>${child}</ul>`;
}

function ol(child: string): string {
    return `<ol>${child}</ol>`;
}

function makeLI(
    container: (child: string) => string,
    contents: string[]
): string {
    const liList = [];

    for (const content of contents) {
        liList.push(`<li>${content}</li>`)
    }

    return container(liList.join(''));
}

const htmlUL = makeLI(ul, ['월', '화', '수', '목', '금', '토', '일']);
const htmlOL = makeLI(ol, ['봄', '여름', '가을', '겨울']);

console.log(htmlUL);
console.log(htmlOL);

//* 반환 값으로 전달되는 함수
function salePrice(discountRate: number, price: number) {
    return price - (price * (discountRate * 0.01));
}

console.log('여름 세일 -' + salePrice(30, 567000));
console.log('겨울 세일 -' + salePrice(10, 567000));

function discountPrice(discountRate: number) {
    return function (price: number) {
        return price - (price * (discountRate * 0.01));
    }
}

console.log('여름 세일 -' + discountPrice(30)(567000));
console.log('겨울 세일 -' + discountPrice(10)(567000));

let summerPrice = discountPrice(30);
let winterPrice = discountPrice(10);


console.log('여름 세일 -' + summerPrice(567000));
console.log('겨울 세일 -' + winterPrice(567000));