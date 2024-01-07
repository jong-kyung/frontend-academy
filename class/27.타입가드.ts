function doubleTypeFunction(a: number | string) {
    if (typeof a === 'string') {
        return a.replace('x', 'X');
    }

    // return a.replace('Y', 'y'); // a는 number일수도 있기때문에 컴파일러가 오류라고 표시함.
}

doubleTypeFunction(10);

function foo(a?: number | null) {
    if (a === null) return;

    console.log('display before');
    console.log(a?.valueOf()); // ?를 해두면 a가 null이면 undefined로 출력하라는 의미. => 프로그램이 다운되지는 않지만 좋지않을 수 있다. 
    console.log('display after');
}

foo();

interface Foo {
    foo: string;
    common: string;
}

function isFoo(arg: any): arg is Foo { // arg가 Foo와 일치하는지 확인하는 타입스크립트 기능
    return arg.foo !== undefined;
}

console.log(isFoo({ foo: 'ok', common: 'wow', active: false }));