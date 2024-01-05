type Book = {
    title: string;
    copyright?: string;
    author?: string;
};

const books: string[] = [
    "헨리 6세",
    "리처드 3세",
    "실수 연발",
    "말괄량이 길들이기",
    "헨리 8세",
];

//* forEach 메서드를 통한 배열 순회, for문보다는 속도가 느린편이다.
books.forEach((book: string, idx: number, books: string[]) => {
    console.log(book, idx);
})


//* map 메서드를 통해 순회한 후 새로운 배열을 반환한다.
const bookObject: Book[] = books.map((book: string) => {
    return {
        title: book,
        author: undefined,
    };
});

console.log(bookObject);

const ShakespeareOneBooks: Book[] = books
    .map((book: string) => ({
        title: book
    })) // 객체를 리턴
    .map((book: Book) => ({
        ...book,
        author: "William Shakespeare"
    })); // 객체를 합쳐서 새로운 객체를 리턴



console.log(ShakespeareOneBooks);

const bookTitleToBookObject = (book: string) => ({ title: book });
const makeAuthor = (name: string) => (book: Book) => ({
    ...book,
    author: name
});

const shakespeareTwoBooks: Book[] = books // 위와 달리 코드의 가독성을 높이고 재활용이 가능하게 해줌.
    .map(bookTitleToBookObject)
    .map(makeAuthor("William Shakespeare"));

console.log(shakespeareTwoBooks);

//* 필터를 통해 true인 데이터만 모아서 새로운 배열로 반환함
const henry: Book[] = shakespeareTwoBooks.filter((book: Book) =>
    book.title.includes("헨리") // 인자로 받은 문자열이 있는지 확인, return: boolean
);

console.log(henry);

const someNumbers: number[] = [10, 5, 3, 14, 56];

//* 누적해서 합하여 리턴함.
const someNumber = someNumbers.reduce((a: number, b: number) => a + b, 0) // a: 두번째인자(초깃값), b: 배열의 첫번쨰 값을 넘겨줌, 두개의 값을 합친 후 a에 10이 들어가고 b에 5가 들어감 이러한 방법을 반복.

console.log(someNumber);

type SomeObject = {
    [key: string]: string | number;
};

const someObjects: SomeObject[] = [
    { border: "none" },
    { fontSize: 24 },
    { className: "box sm-box" },
];

//* 배열안의 객체들을 리듀스를 통해 합치는 방법
const someObject: SomeObject = someObjects.reduce(
    (a: SomeObject, b: SomeObject) => ({ ...a, ...b }),
    {}
);
console.log(someObject)

//* 유사배열을 from을 통해 배열로 리턴해줌.
function sumNumbers(): number {
    return Array.from(arguments).reduce((a: number, b: number) => a + b, 0);
}

// console.log(sumNumbers(10, 20, 30, 40, 50))

function sumNumbersForTypeScript(...args: number[]): number {
    return args.reduce((a: number, b: number) => a + b, 0);
}

console.log(sumNumbersForTypeScript(10, 20, 30, 40, 50))