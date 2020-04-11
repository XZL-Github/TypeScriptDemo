//函数定义

function add2(x: number, y: number) {
    return x + y;
}

let add3: (x: number, y: number) => number
type add4 = (x: number, y: number) => number
interface add5 {
    (x: number, y: number): number
}

// add2(1,2,3)

//可选参数
function add6(x: number, y?: number) {
    return y ? x + y : x;
}
add6(1)

//默认参数值
function add7(x: number, y = 0, z: number, q = 1) {
    return x + y + z + q;
}
add7(1, undefined, 3);
console.log(add7(1, undefined, 3))//5

//参数不固定剩余参数
function add8(x: number, ...rest: number[]) {
    return x + rest.reduce((pre, cur) => pre + cur);
}
console.log(add8(1, 2, 3, 4, 5, 6, 7, 8, 9))//45

//函数重载
function add9(...rest: number[]): number;
function add9(...rest: string[]): string;
function add9(...rest:any[]):any{
    let first=rest[0];
    if(typeof first==='string'){
        return rest.join('');
    }
    if(typeof first==='number'){
        return rest.reduce((pre,cur)=>pre+cur);
    }
}
console.log(add9(1,2,3))//6
console.log(add9('a','b','c'))//abc

