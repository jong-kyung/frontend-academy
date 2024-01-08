const myIterable = {};

myIterable[Symbol.iterator] = function* () {
    let i = 1;
    while (i <= 100) {
        yield i++;
    }
};

//* 이터레이터 프로토콜을 준수하는 문이기떄문에 next가 없어도 작동을 한다.
for (const n of myIterable) { 
    console.log(n);
}