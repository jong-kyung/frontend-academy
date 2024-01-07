type User = {
    id: number;
    name: string;
}

type Address = {
    zipcode: number;
    address: string;
}

function pipeOne(value: any): any {
    return value;
}
 
function pipeTwo<T>(value: T): T { // T: 아직 정해지지 않은 타입이라는 의미로 제네릭 정의
    return value
}

let p1 = pipeOne(10);
let p2 = pipeTwo('10');
let p3 = pipeTwo(true);

const pipeObjectOne = <T>(obj: T): T => {
    return obj;
}

let po1 = pipeObjectOne({ id: 1, name: '김', zipcode: 50213 });
let po2 = pipeObjectOne<User>({ id: 1, name: '김', zipcode: 50213 }); // User 타입에 없는 속성을 걸러줌

//* 클래스 제네릭
class State<S, Config = {}>{ // 콤마로 여러개의 제네릭을 넣을 수 있음
    private _state: S;
    config: Config;

    constructor(state: S, config: Config) {
        this._state = state;
        this.config = config;
    }

    getState(): S {
        return this._state;
    }
}

let s1 = new State<Address, { active: boolean }>({
    zipcode: 50213,
    address: '서울시',
}, {
    active: true,
})

const s1Data = s1.getState();

console.log(s1Data.zipcode, s1Data.address, s1.config.active);

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
getProperty(x, "m");

//* 인터페이스 제네릭
interface KeyPair<T, U> {
    key: T;
    value: U;
}

let kv1: KeyPair<number, string> = { key: 1, value: 'Kim' };
let kv2: KeyPair<number, number> = { key: 2, value: 12345 };