// let obj = {
//   name:'obj',
//   age:11,
// }
// console.log({...obj , name:'hhh'}) // 对象解构进行置换
console.log(null == null) // true
console.log(null === null) // true
console.log(null == undefined) // true
console.log(null === undefined) // false
console.log(!null) // true
console.log(Number.isNaN(1 + null)) // false
console.log(Number.isNaN(1 + undefined)) // true
console.log('----------------------------------')
let str = 'https://www.baidu.com/index.html'
let strarr = str.split('.')
console.log(strarr[strarr.length - 1])
let str1 = str.substring(str.lastIndexOf('.')+1)
console.log(str1)
