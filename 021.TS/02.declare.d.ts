interface Demo {
  name : string;
  age : number;
}

// 变量
declare var $  : (selector :string ) => Demo;

declare let $1 : (selector : number) => number

// 函数
declare function abc<T>( x : number , y : number) : T


// class
declare class AClass{
  name :string;
  age : number;
}

// enum
declare enum FX {
  NORTH,
  SOURTH
}

// namespace
declare namespace testNS {
   class abc { num : string}

   namespace testNS2 {
     function cc ( a : number) : void
   }
}

declare namespace a.b.c {
  enum FX { A, B}
}


// 声明合并
declare function jQuery(selector: string): any;
declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
}