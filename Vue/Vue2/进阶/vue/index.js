import { initMixin } from "./init.js";
import { lifecycleMixin } from "./lifecycle.js";
import { renderMixin } from "./render.js";
import { initGlobalApi } from "./global-api/index.js";

// Vue就是一个构造函数 通过new关键字进行实例化
function Vue(options) {
	// Vue 初始化
	this._init(options);
}

// _init 方法挂载在Vue原型上 通过引入文件的方式进行原型挂载 有利于代码分割

// 混入 _init
initMixin(Vue);

// 混入 _render
renderMixin(Vue);

// 混入 _update
lifecycleMixin(Vue);

// 组件注册
initGlobalApi(Vue);

export default Vue;
