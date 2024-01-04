function delay(ms: number): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            if (Math.floor(Math.random() * 10) % 2 === 0) {
                resolve('success'); // 짝수일경우
            } else {
                reject('failure'); // 홀수일경우
            }
        }, ms);
    });
}

delay(3000)
    .then((result: string) => {
        console.log('done promise' + result);
    })
    .catch((error: string) => {
        console.error('fail promise!' + error);
    });

async function main() { // 비동기 함수의 선언
    try {
        console.log('start job')
        const result = await delay(3000);
        console.error('done async!' + result);
    } catch (e) {
        console.error('fail async' + e);
    }
}

main();