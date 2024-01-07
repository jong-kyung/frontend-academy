const p = new Promise((resolve, reject) => { // 인자로 resolove, reject를 받는다
    setTimeout(() => {
        resolve('OK');
    }, 2000)
    // reject('실패');
})

p.then(function (ok) { // resolve가 호출된 응답으로 then메서드 안에 있는 함수가 호출이 된다.
    console.log('첫번째 성공')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('두번째 성공')
        }, 3000)
    })
})
    .then(function (ok) { // 비동기가 여러개가 연결되어 있을 경우 then으로 연결해줄 수 있음
        console.log(ok)
    })
    .catch(function (error) {
        console.log(error)
    })


function double(x) {
    return x * 2;
}
//* 비동기 함수
function caclValue(a, b, cb) {
    setTimeout(() => {
        cb(a + b);
    }, 100)
}

//* 동기코드란 이전 라인의 코드가 실행이 완료되기 전에 다음 라인의 코드가 실행되지 않는 것이다.
const x = double(100);
const y = x;

const r = caclValue(10, 20, (result) => {
    console.log(result)
})
const z = r;

//* 프로미스 적용
function caclValue(a, b, cb) {
    setTimeout(() => {
        cb(a + b);
    }, 100)
}