// 柯里化函数
function area1(width){
  return (height)=>{
    return width * height
  }
}
let result1 = area1(10)(10)
console.log(result1)