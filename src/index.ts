// function timeout(ms) {
//     return new Promise((resolve) => {
//         console.log("promise:", ms);
        
//         setTimeout(resolve, ms)
//     })
// }

// const readFile = async (ms) => {
//     await timeout(ms)
//     console.log("async:", ms);
    
// }

// readFile(3000).then(() => {
//     console.log("readFile end");
    
// })

// async function foo() {
//     return "hello world!"
// }

// foo().then((v) => {
//     console.log(v);
// })

// console.log([1,2,3,4]);
// console.log(...[1,2,3,4]);
// console.log(Math.max(...[1,2,3,4]));
// console.log([1,2,3,4].push(...[5,6,7]));
// console.log(new Date(2022,1,25));

// const arr: Array<number> = [1,2,3,4]
// const arr2 = [...arr]
// arr2[0] = 999
// console.log(arr);
// console.log(arr2);


// const [first, ...second] = [1,2,3,4]
// console.log(first);
// console.log(second);

// console.log([].push(3));

// let map = new Map([
//     [1, '1'],
//     [2, '2']
// ])
// console.log(map);
// console.log([...map.values()]);
// console.log([...map.keys()]);
// console.log([...map.entries()]);

// const go = function*() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// console.log([...go()]);

// let likeArr = {
//     0: '1',
//     1: '2',
//     2: '3',
//     length: 3
// }

// const arr = Array.from(likeArr)
// console.log(arr);

// console.log(Array.of(1,2,3,4));

// console.log([-1,2,6,5].find(n => n===2));
// console.log([-1,2,6,5].find(n => n===0));
// console.log([-1,2,6,5].findIndex(n => n===2));

// console.log([1,2,3,4].fill(2));

// for(let key of [1,2,3,4].keys()) {
//     console.log(key);
// }

// for(let value of [1,2,3,4].values()) {
//     console.log(value);
// }

// for(let value of [1,2,3,4].entries()) {
//     console.log(value);
// }

// console.log([1,2,3,4].includes(5));

// console.log([1,2,3, [4,5]].flat());

// console.log([1,2,3,4].at(-1));
// console.log([1,2,3,4].join(','));
// console.log([1,2,3,4].toString());
// console.log([1,2,3,4].toLocaleString());
// console.log([1,2,3,4].sort((a,b) => b-a));

// console.log([1,2,3,4].map(v => v*v));
// console.log([1,2,3,4].forEach(v => v*v));
// console.log([1,2,3,4].reduce((sum,current) => sum*current));

// console.log(Object.is({}, {}));
// console.log(Object.is(-0, +0));
// console.log(Object.is('a', 'a'));
// console.log(Object.is(NaN, NaN));

// const source = {
//     name: 'cg',
//     age: 22
// }
// const target = {}
// const v = Object.assign(target, source)
// console.log(v);
// source['age'] = 33
// console.log(v);
// console.log(source);

// const source = {
//     name: 'sw',
//     age: 22
// }
// console.log(Object.getOwnPropertyDescriptor(source, "name"));
// console.log(Object.getPrototypeOf(source));
// // console.log(source.__proto__);
// console.log(Object.keys(source));
// console.log(Object.values(source));
// console.log(Object.entries(source));
// console.log(Object.fromEntries([[1,'1'],[2,'2']]));

// const source = {
//     name: 'sw',
//     age: 0
// }
// console.log(source.age || 2);
// console.log(source.age ?? 2);
// console.log(source?.age);

// console.log(Promise.reject(false));
// console.log(Promise.resolve(true));

// console.log("start");
// const promise = new Promise((resolve, reject) => {
//     console.log("start promise");
//     setTimeout(() => {
//         console.log("setTimeout");
//         resolve(true)
//     },2000)
//     console.log("end promise");
// })
// console.log("middle");
// promise.then((val) => {
//     console.log(val);
// })
// console.log("end");

// const s = new Set();
// s.add(1).add(2).add(3).add(4);
// console.log(s.has(2));
// console.log([...s]);


// function *say() {
//     yield "hello"
//     yield "world"
// // }

// const say = function* () {
//     yield "hello"
//     yield "world"
// }
// const s1 = say();
// console.log([...say()]);
// console.log(s1.next());
// console.log(s1.next());
// console.log(s1.next());

// const clock = function* () {
//     let count = 0
//     while(true) {
//         console.log("Tick!");
//         yield ++count;
//         console.log("Tock!");
//         yield ++count;
//     }
// }
// const c1 = clock()
// console.log(c1.next());
// console.log(c1.next());
// console.log(c1.next());
// console.log(c1.next());
// console.log(c1.next());

// const source = {
//     name: 'cg',
//     age: 22
// }
// console.log(Reflect.has(source, 'name'));
// console.log(Reflect.get(source, 'age'));
// console.log(Reflect.ownKeys(source));
// console.log(Reflect.isExtensible(source));
// console.log(Reflect.deleteProperty(source, 'age'));
// console.log(source);

// const source = {
//     name: 'cg',
//     age: 22
// }

// const proxy = new Proxy(source,{
//     get(target, propKey, receiver) {
//         // console.log(target, propKey, receiver);
//         return target[propKey]
//     },
//     set(target, propKey, value, receiver) {
//         target[propKey] = value + '123'
//         return true
//     }
// })
// console.log(proxy.age);
// console.log(proxy.name);
// proxy.age = 22
// console.log(source);
// console.log(proxy);
// source.age = 21
// console.log(source);
// console.log(proxy);

// let s = "hello world!";
// console.log(s.at(-2));
// console.log(s.charAt(0));
// console.log(s.charCodeAt(0));
// console.log(s.codePointAt(0));
// console.log(s.concat("sd","sds"));
// console.log(s.endsWith("!"));
// console.log(s.includes("o"));
// console.log(s.indexOf("o"));
// console.log(s.lastIndexOf("o"));
// console.log(s.length);
// console.log(s.normalize());
// console.log(s.match(/!/i));
// console.log(s.repeat(2));
// console.log(s.localeCompare("hello"));
// console.log(s.valueOf());
// console.log(s.trim());
// console.log(s.replace("o", "@"));
// console.log(s.replaceAll("o", "@"));
// console.log(s.padStart(20, "@"));


console.log(`hello world! ${2}`);







































