const jsonString = `
    {
        "name": "Kim Code",
        "age": 30,
        "bloodType": "B"
    }
`; // 홀따옴표를 사용하면 오류가 발생한다


try { // json은 혹시모를 오류를 대비해야함.
    const myJson = JSON.parse(jsonString); // JSON을 자바스크립트 객체로 변환

    console.log(myJson.name);

    console.log(JSON.stringify((myJson))); // 자바스크립트 객체를 JSON으로 변환

} catch (e) {
    console.log('다시한번 시도해 주세요.')
}