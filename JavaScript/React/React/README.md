### 永远不要在组件中定义组件 在顶层定义每个组件
``` js
export default function Gallery() {
  function Profile() {
    // ...
  }
  // ...
}
```

### JSX语法
- <Fragment></Fragment> 简写语法 <> </> 
- JSX 引号内的值会作为字符串传递给属性
- 大括号让你可以将 JavaScript 的逻辑和变量带入到标签中。
- 它们会在 JSX 标签中的内容区域或紧随属性的 = 后起作用。
- {{ 和 }} 并不是什么特殊的语法：它只是包在 JSX 大括号内的 JavaScript 对象

### props 是组件的唯一参数
- 可以解构
- 可以给默认值
- *{...props} 展开语法 将它们所有的 props 转发给子组件*
- 带有 children 的组件可以由其父组件使用任意 JSX 来“填充”
- Props 是只读的时间快照：每次渲染都会收到新版本的 props
- 你不能改变 props。当你需要交互性时，你可以设置 state

### 条件渲染
- 在 React 中可以使用 JavaScript 来控制分支逻辑
- if 语句来选择性地返回 JSX 表达式
- 三目运算符（? :）
- *与运算符（&&）*

### 事件处理函数
- e.stopPropagation() 阻止触发绑定在外层标签上的事件处理函数。
- e.preventDefault() 阻止少数事件的默认浏览器行为。

### 渲染
- 渲染必须始终是一次 纯计算
  - 输入相同，输出相同
  - 只做它自己的事情
- 在 “严格模式” 下开发时，React 会调用每个组件的函数两次，这可以帮助发现由不纯函数引起的错误
- 设置 state 只会为下一次渲染变更 state 的值
- 一个 state 变量的值永远不会在一次渲染的内部发生变化， 即使其事件处理函数的代码是异步的
- React 会等到事件处理函数中的 所有 代码都运行完毕再处理你的 state 更新。
- state 更新一个对象时，需要创建一个新的对象（或者将其拷贝一份），然后将 state 更新为此对象

