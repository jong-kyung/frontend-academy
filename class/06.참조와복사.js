//* 복사 매커니즘
let a = 10;
let b = a; // 값이 복사됨을 의미함.

b = 20;

//* 참조 매커니즘
let o = { 
    isLoading: false,
}

// let o2 = o; // 객체는 객체가 복사되는것이 아닌 객체가 저장되어있는 위치값만 저장됨. 즉 참조하고 있음.

// o2.isLoading = true;

function foo(o){
    o.isLoading = true;
}

foo(o);

console.log('done')