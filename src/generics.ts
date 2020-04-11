//泛型
function log<T>(value: T): T {
    console.log(value);
    return value;
}

log<string[]>(['a', 'b', 'c'])
log(['a', 'b', 'c'])

// type Log = <T>(value: T) => T
// let MyLog: Log = log

interface Log<T = string> {//T 默认string 类型
    (value: T): T
}
let myLog: Log = log
myLog('a')



class Log1<T>{
    run(value:T){
        console.log(value)
        return value
    }
}
let log1=new Log1<number>();
log1.run(1)
let log2=new Log1();
log2.run('1')


interface Length{
    length:number
}
function log11<T extends Length>(value:T):T{
    console.log(value,value.length);
    return value;
}
log11([1])
log11('123')
log11({length:1})