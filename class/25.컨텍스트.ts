const person = {
    name: 'Kim code',
    age: 20,
    getAge() {
        return this.age;
    }
}

person.age;
//* execution 컨텍스트, 실행 컨텍스트라 부름. 기본 컨텍스트임
person.getAge(); // this키워드를 통해 소유자(person)가 있음을 확인할 수 있다.

const age = person.getAge;

// age(); // this키워드를 통해 소유자 확인이 안됨을 확인할 수 있다.

age.call(person); // call메서드를 통해 컨텍스트를 지정해준다

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.getAge = this.getAge.bind(this); // 소유자가 고정될 수 있도록 bind를 통해 컨텍스트를 고정시킨다.
    }

    getAge() {
        return this.age;
    }

    //* lexical 컨텍스트, 어휘 컨텍스트, arrow function을 통해 만듬
    getName = () => this.name;
}

const p1 = new Person('Kim code', 10)

p1.getAge();

const myAge = p1.getAge;

myAge();

p1.getName();

const x = p1.getName;
x();
