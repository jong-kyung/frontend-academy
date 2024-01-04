function makeInfiniteEnergyGenerator() {
    let energy = 0;
    return function (booster = 0) {
        if (booster) {
            energy += booster;
        } else {
            energy++;
        }

        return energy;
    };
}

//* 위의 함수를 생성기함수로 만든 것
function* infiniteEnergyGenerator() {
    let energy = 1;
    while (true) { // 생성기함수의 특수한 형태덕분에 무한루프를 돌지 않고 멈춘다.
        const booster = yield energy; // yield키워드를 통해 생성기 함수를 멈추고 yield 뒤의 값을 객체로 만들어서 반환해준다.

        if (booster) {
            energy += booster;
        } else {
            energy++;
        }

        // return을 통해 값을 반환하면 done속성을 true로 만든다. 즉 함수가 종료된다.
    }
}

// const energy = makeInfiniteEnergyGenerator();

// for (let i = 0; i < 5; i++) {
//     console.log(energy());
// }

// console.log(energy(5));

const energyGenerator = infiniteEnergyGenerator();


for (let i = 0; i < 5; i++) {
    console.log(energyGenerator.next()); // next 메서드를 통해 함수 실행
}

console.log(energyGenerator.next(5)) // yiled가 값을 리턴한것 처럼 booster 에 값이 대입된다