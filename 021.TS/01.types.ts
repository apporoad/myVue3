let isDone:boolean = true;
// let createdByBoolean :boolean = new Boolean(1);
let createdByBoolean2 :Boolean = new Boolean(1);
let createdByBoolean3 :boolean = Boolean(1)



let n1 : number =10;
let hexNumber : number  = 0x100;
//二进制
let binaryNumber : number = 0b10101
//八进制
let octalNumber : number = 0o7221
// NaN
let naNNumber : number = NaN
// infinite
let infiniteNumber : number = Infinity


//字符串
let myName :string = 'Tom';
let myAge : number = 2;
// template string
let sentence = `hello , my name is ${ myName} .
my age is ${myAge + 1} years old.`


//void
function alertName(name : string) : void{
  // alert(name)
}
// alertName('hello')

let unusable : void = undefined
// let unusableNum : void = null

let u :undefined = undefined;
let n : null = null


// let num: number = undefined;

let anyValue : any = 'hello'
anyValue = undefined
anyValue = null

// let  something = 1
// something = 'asdf'
let something;
something = 1
something = ''


//联合类型
let numOrStr : string | number ;
numOrStr = 3;
numOrStr = 'asdf';
// numOrStr = null


//interface
interface Demo {
  name : string;
  age : number;
}

let demo :Demo = {
  name : 'yes',
  age :17
}


// option interface
interface DemoOption {
  name : string,
  age? : number
}

let demoOption : DemoOption = {
  name : 'tom'
}

// any properties
interface DemoAny {
  name : string;
  age : number;
  [someName : string ] : any;
}

let demoAny : DemoAny = {
  name : 'tome',
  age : 18,
  yes : 2323
}


interface DemoAny1 {
  name : string;
  age : number;
  [something : string] : string | number
}

let demoAny1 : DemoAny1 = {
  name : 'lily',
  age : 12,
  // hobby :  null
}

// readonly
interface DemoReadyonly {
  name : string ;
  readonly age : number
}
let demoReadyonly : DemoReadyonly = {
  name : 'hell',age :18
}
demoReadyonly.name = 'hi'
// demoReadyonly.age = 13


//array

let numArray : number[] = [ 
  // '' ,
  1,3,6,3.2]

let numOrStrArray : (number |string) [] = [ 1, '', 
// null, 
1,3]


let genericArray : Array<number| string> = [ 1, '', 
// null,
3]


interface ArrayType{
  [index : number] : string
}
let arrType : ArrayType = [ '' , 'a' , 'b']

//类数组
function sum(...n : number[]){
  let args: {
    [index :number] : number;
    length: number;
    callee: Function;
  } = arguments
  var total = 0
  for(let i =0;i<args.length;i++){
    total = total + args[i]
  }
  return total
}
console.log(` sum(1,3,4,5,6) : ${ sum(1,3,4,5,6) }`)

function sum2 (...n : number[]) : number{
  let args : IArguments = arguments;
  var total = 0
  for(let i =0;i<args.length;i++){
    total = total + args[i] * 2
  }
  return total
}
console.log(` sum2(1,3,4,5,6) : ${ sum2(1,3,4,5,6) }`)

let anyArray : any[] = [ 1,3 ,null , undefined , '']



// functions
function fn1( n1 : number , n2 : number) : number {
  return 0
}
let fn2 : Function = function(x, y){
}

let fn3 : (x : number , y : number) => number = function(x:number, y: number ){
    return 0
}

interface DemoFunc {
  (x : number , y : number) : number
}

let demoFunc : DemoFunc = (x : number , y: number) => {  return x + y }

// 可选参数
function fn4( x:string , y? : string) : string{
  return x+ y;
}

// 默认参数
function fn5(x:string = 'hello' , y :string){
  return x + y
}

//剩余参数
function fn6(x, ...y){

}

//重载
function fn7( x:number | string, y : Number) : (string | number){
  return 0
}


//类型转换
let num = Number('23')

//泛型
function fn8<T>(abc : T , d : string) : T{
  return abc
}