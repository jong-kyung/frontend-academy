type UniqObject = {
    id: string;
    [key: string]: string | number | boolean;
}

const makeObject = (): UniqObject => ({
    id: '1234',
})

console.log(makeObject());
console.log(makeObject());

// npm install @types/uuid
//* 타입스크립트를 지원하지 않는경우 해결방법.
// 1. import할때마다 타입을 확인하고 타이핑을 직접한다.
// 2. @types 저장소를 통해 타입스크립트를 지원하는지 확인하고 설치한다. -> @types에서 지원하는걸 찾고 설치하는게 권장됨