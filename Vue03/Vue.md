# Vue

## v-bind

数据属性值，如果是true，false直接决定标签属性是否渲染

数据属性值，如果时null，undefined，直接决定标签属性不渲染，等价于false

数据属性值，如果是0 ， NaN， ‘ ’ ， 直接决定标签属性渲染，但是标签属性无值

数据属性值，如果是非布尔值，非null，非undefined，非0 ，非NaN，非‘ ’，的正常值，都会作为标签属性值渲染

## v-for

 for 渲染的property属性 值为 数组/对象

​      1. 修改整个property的值 view层可以响应

​      2. 直接修改property的数组/对象值的某一项 view无法响应 

​          app.list[3] = {id,content}

​          app.product.b = 'hahah'

​      3. 通过vue 提供的 侦听包装方法 对property数组进行操作 view可以响应

​          push()

​          pop()

​          shift()

​          unshift()

​          splice()

​          sort()

​          reverse()

## v-if和v-show的区别

v-if确定渲染

v-show决定展不展示

## computed

app.timesec

是

computed.timesec方法给app 挂在一个同名属性 属性值为timesec方法的返回值



methods能做的computed也可以做，computed更独立（不用传参数）更静态



computed能做更多复杂性的属性上的操作



computed具备缓存性,只有依赖属性改变时，才会重新更新

computed不能做异步处理,即时性

## doctype 

声明文档类型，告诉当前浏览器html的版本

## watch

当一个属性发生变化时，可以通过watch监听到,可处理异步



## watch，methods，computed，filters三者区别

watch可以做异步，不要求return

监听属性变化，做对应的处理

```
computed是即时性计算属性，同步，响应式

methods是调用式的，非响应，可异步，在事件中写不能使用async await可用then catch，在插值绑定中异步必须return

watch针对属性做被动触发，属性改变时,并且两次值不同，才会触发setter，可做异步

```

```
methods:单纯的方法 , 可以访问this指向实例，可异步

computed：属性计算，可以访问this实例，不可异步

watch：属性的改变,响应式的，属性值变化时，做出响应，可以访问this指向实例，可异步

filters：对原始数据的过滤，针对于数据,非严格模式下指向window，严格模式undefined，最纯粹的工具方法


```

## 生命周期

```
开始->结束 === 生命周期
创建阶段：beforecreate=>Create=>created=> =>beforemount=>Mount=>mounted
运行阶段：beforeupdate updated
销毁阶段：beforedestroy destroyed

```

![](C:\Users\航\Desktop\16d48805a7890b16.jpg)

## v-model

```
v-model指令在表单<input> <textarea> <select>元素上创建双向数据绑定。它会根据空间类型自动选取正确的方法来更新元素，他负责监听用户的输入事件已更新数据，并对一些极端场景做特殊处理
text和textarea元素使用value属性和input事件
checkbox和radio元素使用checked属性和change事件
slect字段将value作为属性并将change作为事件

修饰符
.lazy在change事件发生后进行同步
.number 自动将用户输入的值转换为数值型
.trim 过滤用户输入的空白字符


```



## 组件

```
组件是可复用的vue实例
一个组件的date选项必须是一个函数，这是因为组件具有可复用性，函数写法，可以让组件复用时，不必用同一个内存地址的同一个属性
组件的注册类型分为：全局注册组件和局部注册组件
全局注册的组件可以用在被注册之后的任何新创建的vue根实例，也包括其组件树中的所有子组件的模板中
局部组件一般只有一个实例
子组件无法直接使用父组件或者实例的data
通过prop可以向子组件传递数据

```

