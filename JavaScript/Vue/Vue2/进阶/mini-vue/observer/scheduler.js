import { nextTick } from "../util/next-tick.js";

let queue = [];
let has = {};
function flushSchedulerQueue() {
	// 调用watcher的run方法 执行真正的更新操作
	queue.forEach(watcher => watcher.run());
	// 执行完之后清空队列
	queue = [];
	has = {};
}

// 实现异步队列机制
export function queueWatcher(watcher) {
	const id = watcher.id;
	// watcher去重
	if (has[id] === undefined) {
		// 同步代码执行 把全部的watcher都放到队列里面去
		queue.push(watcher);
		has[id] = true;
		// 进行异步调用
		nextTick(flushSchedulerQueue);
	}
}
