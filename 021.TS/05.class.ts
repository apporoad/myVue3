
// es6 class
class Animal {
  name : string;
  constructor(name : string){
    this.name =name;
  };
  sayHi(){
    return `my name is ${this.name}`
  }
}

let cat = new Animal('kitty')
console.log(cat.sayHi())


// 集成
class Cat extends Animal{
  constructor(name : string){
    super(name);
  };
  sayHi(): string {
    return 'miew , ' + super.sayHi();
  }
}

let newCat = new Cat('tom')
console.log(newCat.sayHi())


// get & set
class Animal2{
  get name() : string{
    return 'jack'
  }
  set name(newName : string) {
    console.log('do nothing ' + newName)
  }
}
let a1 = new Animal2()
a1.name = 'hello';
console.log(a1.name)

// static 静态方法
class Animal3 {
  static hi() : string{
    return 'hi , here is static test';
  }
}
console.log(Animal3.hi())


//////////////////////// es7 class
class Animal4{
  name = 'jack'

  static name2 = 'animal'
}
let a3 = new Animal4()
console.log('es7 name :' + a3.name)
console.log('es7 static name :' + Animal4.name2)


/************TypeScript 中类的用法 */

class Animal5 {
  public name = 'here ts name' 
  private _name = 'private ts name'
  protected name2 = 'protected name'
}

let a5= new Animal5()
console.log(a5.name)
// console.log(a5._name)

class Animal6 extends Animal5{
  public callName (){
    return this.name + this.name2
  }
}
let a6 = new Animal6()


// 抽象类
abstract class Animal7 {

}

// new Animal7()


// interface

interface I1 {
  hi() : void;
}

interface I2 extends I1 {
  hello() : void;
}

class TestClass implements I2{
  hello(): void {
    console.log('hello')
  }
  hi(): void {
    console.log('hi')
  }
}

// interface extends class
class Origin{
  public name = "jack"
  public static sname = 'tom'
  public sayHi (){
    console.log(' here is origin')
  }
}

interface TempInterface extends Origin{
  iCall(): void
}

class NewC implements TempInterface{
  public sayHi(): void {
    console.log('here is newC')
  }
  iCall(): void {
    console.log('iCall')
  }
  public name: string;
}