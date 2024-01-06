//* 튜플의 선언
const address: [number, string, string] = [14023, '서울시,', '송파구']; // 자바스크립트가 제공하는 배열을 확장한 기능임

let [zipcode, address1] = address;

// zipcode = '12345'; // error

type BookInfo = [string, string, number];

const BookData: BookInfo[] = [
    ['헨리 8세', '세익스피어', 1884],
    ['헨리 8세', '세익스피어', 1884],
];


BookData.push(['a', 'b', 23]);

function getArrayOne(): any[] {
    return [14023, '서울시', '송파구'];
}

type Address = [number, string, string];

function getArrayTwo(): Address {
    return [14023, '서울시', '송파구'];
}

let address2 = getArrayTwo()[2];

// address2 = 12; // error