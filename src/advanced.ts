let a = 1;
let b = [1, null];

let c = (x = 1) => x + 1;

window.onkeydown = (event: KeyboardEvent) => {

}
interface Foo {
    bar: number;
}
// let foo = {} as Foo
let foo: Foo = {
    bar: 1
}
// foo.bar = 1

/*
 * X 兼容 Y:X (目标类型) = Y(源类型)
*/

let s: string = 'a'
// s=null;

//接口兼容性
interface X {
    a: any;
    b: any;
}
interface Y {
    a: any;
    b: any;
    c: any;
}
let x1: X = { a: 1, b: 2 }
let y: Y = { a: 1, b: 2, c: 3 }
x = y
// y=x

//函数兼容性
type Handler=(a:number,b:number)=>void
function hof(handler:Handler){
    return handler
}

//1>参数个数
let handler1=(a:number)=>{}
hof(handler1);
let handler2=(a:number,b:number,c:number)=>{}
// hof(handler2)

// 可选参数和剩余参数
let aa=(p1:number,p2:number)=>{}
let bb=(p1?:number,p2?:number)=>{}
let cc=(...args:number[])=>{}
aa=bb
aa=cc
// bb=cc
// bb=aa
cc=aa
cc=bb

//2>参数类型
let handler3=(a:string)=>{}
// hof(handler3)
