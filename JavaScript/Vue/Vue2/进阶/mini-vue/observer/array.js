// 先保留数组原型
const arrayProto = Array.prototype;
// 然后将arrayMethods继承自数组原型
// 这里是面向切片编程思想（AOP）--不破坏封装的前提下，动态的扩展功能
export const arrayMethods = Object.create(arrayProto);
const methodsToPatch = [
	"push",
	"pop",
	"shift",
	"unshift",
	"splice",
	"reverse",
	"sort"
];
methodsToPatch.forEach(method => {
	arrayMethods[method] = function (...args) {
		// 这里保留原型方法的执行结果
		const result = arrayProto[method].apply(this, args);
		// this代表的就是数据本身
		// 这个属性就是上段代码增加的 代表的是该数据已经被响应式观察过了指向Observer实例
		const ob = this.__ob__;

		// 判断数组是否有新增操作
		let inserted;
		switch (method) {
			case "push":
			case "unshift":
				inserted = args;
				break;
			case "splice":
				inserted = args.slice(2);
			default:
				break;
		}
		// 如果有新增的元素 inserted 是一个数组 调用Observer实例的observeArray对数组每一项进行观测
		if (inserted) ob.observeArray(inserted);
		// 数组派发更新
		ob.dep.notify();
		return result;
	};
});
