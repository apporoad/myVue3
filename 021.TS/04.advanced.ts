

//类别别名

type StrNum = string | number
type StrNumFn = ()=> StrNum

function getSome() : StrNumFn | StrNum {
  return ''
}


// 字符串字面量类型
type SomeStrType = 'a' | 'b' | 'c'
type SomeNumType = 1 | 2 | 'c'

function getAny(abc :SomeStrType ): SomeNumType {
   return 1
}

// tuple 元组
let tuple : [ number , null , string] = [ 1, null, '']
tuple[0] = 2
tuple[1] = null


// 枚举
enum Days { Sun , Monday}



// 泛型
function createArray<T>(n : number, a : T) : Array<T>{
  return [a , a, a]
}

function otherArray<T,C,A>(t : T, c: C ,a :A) {
  console.log('test')
}

interface TestI {}
function anotherArray<T extends TestI>( t :T){

}

interface IFunc{
  <T>(x : string) : T[]
}
let iFunc :IFunc = function<T>( x : string) : T[] {
  return []
}


class DemoClass<T = string>{
  hello : () => T
}