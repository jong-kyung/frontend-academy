const arr = ['a', 'b', 'c', 'd'];

// console.log(arr[1]);

//* for문
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

//* while문
let i = 0;

while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

//* do while문
i = 0;

do {
    console.log(arr[i]);
    i++;
} while (i < arr.length)

//* for of 반복문
for (const item of arr) {
    console.log(item)
}

//* for in 반복문
// for in반복문은 위치값(key값)을 전달해줌. 보통 객체나 배열의 키의 값을 꺼내올 때만 사용함
for (const index in arr) {
    console.log(arr[index]);
}

const obj = {
    color: 'red',
    width: 200,
    height: 200,
}

for (const key in obj) {
    console.log(key);
}