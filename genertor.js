// 迭代器：从一个数据集中按照一定顺序不断取出数据的过程
const arr = [1,2,3]
let arrIterator = arr[Symbol.iterator]()
console.log(arrIterator.next())
console.log('------------------------')
const colorObj= {
	white: "小白",
	black: "小黑",
	gray: "小灰",
}
// 转换为类数组对象
colorObj[Symbol.iterator] = function(){
  let keys = []
  let length = 0 
  for(const key in colorObj){
    if(colorObj.hasOwnProperty(key)){
      keys.push(key)
      length++
    }
  }
  let index = 0
  return {
    next:()=>{
      if(index < length){
        const result = {value : colorObj[keys[index]] , done:false}
        index++
        return result
      }else{
        return {value:undefined , done:true}
      }
    }
  }
}
for(const value of colorObj){
  console.log(value)
}
console.log('-------------------')
const arrayLike= {
	0: "小白",
	1: "小黑",
	2: "小灰",
	length: 3
}
arrayLike[Symbol.iterator]=function(){
  let index = 0
  return {
    next:()=>{
      if(index < this.length){
        const result = {value : this[index] , done:false}
        index++
        return result
      } else{
        return {value : undefined , done:true}
      }
    }
  }
}
for(const value of arrayLike){
  console.log(value)
}