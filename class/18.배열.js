const books = []; // 배열의 생성

//* 데이터 삽입
books[0] = "헨리 6세 제1부";
books[1] = "헨리 6세 제2부";
books[2] = "헨리 6세 제3부";

//* 맨뒤에 데이터 삽입, 메서드 이용
books.push("리처드 3세");
books.push("실수 연발");
books.push("말괄량이 길들이기");

console.log(books);
console.log(books.length);

//* 데이터 삭제
books.pop();
books.pop();

console.log(books);
console.log(books.length);

//* 원본 배열은 보존하고 데이터를 추출함
const oneBooks = books.slice(1, 2); // 첫번째 인자: 잘라올 원소의 시작위치, 두번째 인자: 잘라올 원소의 마지막 위치

console.log(oneBooks);
console.log(books);
console.log(books.length);

//* 데이터를 추출한 후 추출된 자리에 세번째 인자 이후의 원소들이 원본 배열에 삽입된다.
const twoBooks = books.splice(1, 2, '햄릿', '오셀로', '리어왕');

console.log(twoBooks);
console.log(books);
console.log(books.length);

//* 첫번째 데이터를 추출함 원본배열을 변환시킴.
twoBooks.shift();

console.log(twoBooks); 

//* 맨앞에 데이터를 추가한다
twoBooks.unshift('한여름 밤의 꿈');

console.log(twoBooks);

//* 배열을 문자열로 합친다.
const allBooks = books.join();

console.log(allBooks);

//* 문자열을 구분자로 나누어 배열로 만든다.
const newBooks = allBooks.split(',');

console.log(newBooks);

console.log(oneBooks);
console.log(twoBooks);

//* 두 개의 배열을 하나로 합친다.
const nextBooks = oneBooks.concat(twoBooks);

console.log(newBooks);

//* 전개연산자를 통해 두 개의 배열을 하나로 합친다.
const nextBookList = [...oneBooks, ...twoBooks];

console.log(nextBookList);