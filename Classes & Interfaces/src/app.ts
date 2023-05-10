// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}
// 允许定义对象的结构，我们可以将它用作类型检查，对于必须具有此结构的对象

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
} // 该属性可能存在，在实现此接口的类中

interface Greetable extends Named {
  greet(phrase: string): void;
} //用,可以合并多个接口

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

let user1: Greetable;

user1 = new Person();
// user1.name = 'Manu';

user1.greet("Hi there - I am");
console.log(user1);
