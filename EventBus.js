//this.$bus.$emit('事件标识符‘ , 传递的数据)
// this.$bus.$on('事件标识符' ，回调函数) 或者on('事件标识符' ， (传递的数据)=>{操作})
class EventBus{
  constructor(){
    this.events = Object.create(null) // 相当于this.events={}
  }
  $on(name , handle){
    if(!this.events[name]){
      this.events[name]=[] // 判断this.events[name]是否存在，不存在初始值为数组。
      // 多个组件监听同一个事件
    }
    this.events[name].push(handle)
  }
  $emit(name , ...data){
    this.events[name] && this.events[name].forEach((handle)=>{
      handle(...data)
    })
  }
  $off(name , offhandle){
    if(!this.events[name]){
      return false
    }
    let idx = this.events[name].findIndex(handle=>{
      return handle === offhandle
    })
    this.events[name].splice(idx , 1) // 删除事件
    if(!this.events[name].length){
      delete this.events[name]
    }
  }
  $once(name , handle){
    // 执行完之后，立刻销毁
    const oncehandle=(...args)=>{
      handle(...args)
      this.$off(name , handle)
    }
    this.$on(name , oncehandle)
  }
}
