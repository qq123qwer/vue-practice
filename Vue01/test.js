// defineProperty详情
/**
 * Object.defineProperty有三个参数
 * 第一个参数：目标对象
 * 第二个参数：目标对象新建的属性
 * 第三个参数：描述
 * value 设置属性值
 * writable 控制属性是否可以修改，默认为false
 * enumerable控制属性是否可以枚举，默认为false 便利对象得到属性
 * configurable控制属性是否可以被删除，默认为false
 * 最后还有两个重要的属性，set和get。控制存取
 * 当使用set和get方法时，不能使用writable和value
 * get时获取值方法 ， 类型为function ， 获取值时被调用，不设置时undefined，返回的值作为该属性的值
 * set时设置值方法，类型为function，设置值时被调用，
 * set和get不是成对出现
 * 
 * Object.defineProperty 给对象添加新的属性，或者修改已存在的属性，
 */
let bvalue = 38
let o = {}
let arr = []
Object.defineProperty(o , 'b' , {
  get(){
    return bvalue
  },
  set(newvalue){
    bvalue = newvalue
    console.log(bvalue)
    arr.push({'b':bvalue})
  }
})
o.b = 10
console.log(arr)
// -----------------------
console.log('--------------------')
function archiver(){
  let a = []
  let b = 10
  Object.defineProperty(this , 'age' , {
    get(){
      return b
    },
    set(newval){
      b = newval
      a.push({'age':b})
    },
  })
  this.getArch=()=>a
}
const c = new archiver()
console.log(c.age)
c.age = 1110
console.log(c.getArch())
// -------------
console.log('**********************')
class defineProperty{
  constructor(newvalue , object , prop , result = []){
    this.newvalue = newvalue
    this.object = object
    this.prop = prop
    this.result = result
  }
  init(){
    Object.defineProperty(this.object , this.prop , {
      set(val){
        this.newvalue = val
        this.result.push([this.prop , this.newvalue])
        return this.result
      },
      get(){
        return '总是获取这个值'
      }
    })
  }
}