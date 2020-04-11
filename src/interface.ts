//接口
interface List {
    readonly id: number;
    name: string;
    // [x:string]:any
    age?: number
}
interface Result {
    data: List[]
}
function render(result: Result) {
    result.data.forEach((value) => {
        console.log(value.id, value.name);
        if (value.age) {
            console.log(value.age)
        }
        // value.id++;
    })
}
let result = {
    data: [
        { id: 1, name: 'A', sex: 'male' },
        { id: 2, name: 'B' }
    ]
}
render(result)

// render({
//     data: [
//         { id: 1, name: 'A', sex: 'male' },
//         { id: 2, name: 'B' }
//     ]
// })

// render({
//     data: [
//         { id: 1, name: 'A', sex: 'male' },
//         { id: 2, name: 'B' }
//     ]
// } as Result)//类型断言 是 Result 告诉它我就是这个类型

// render(<Result>{
//     data: [
//         { id: 1, name: 'A', sex: 'male' },
//         { id: 2, name: 'B' }
//     ]
// })


interface StringArry {
    [index: number]: string
}
let chars: StringArry = ['A', 'B']

interface Names {
    [x: string]: string;
    // y:number;
    [z: number]: string
}


// let add1: (x: number, y: number) => number

// interface Add{
//     (x:number,y:number):number
// }

type Add=(x:number,y:number)=>number

let add1:Add=(a,b)=>a+b

//混合接口
interface Lib{
    ():void;
    version:string;
    doSomething():void;
}

function getLib(){
    let lib:Lib=(()=>{}) as Lib;
    lib.version='1.0';
    lib.doSomething=()=>{};
    return lib;
}

let lib1=getLib();
lib1();
lib1.doSomething();
let lib2=getLib();





