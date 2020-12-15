import { initMixin } from "./init";
import { stateMixin } from "./state";
import { renderMixin } from "./render";
import { eventsMixin } from "./events";
import { lifecycleMixin } from "./lifecycle";
import { warn } from "../util/index";

//Vue构造函数，页面调试开始的位置
function Vue(options) {
  if (process.env.NODE_ENV !== "production" && !(this instanceof Vue)) {
    warn("Vue is a constructor and should be called with the `new` keyword");
  }
  this._init(options);
}

initMixin(Vue); // 扩展了一个_init方法
/** 内部初始化
 * initLifecycle(vm) // $parent/$root
 * initEvents(vm) // 自定义事件监听
 * initRender(vm) // $slots/$createElement
 * callHook(vm, 'beforeCreate')
 * // 获取祖辈注入的数据
 * initInjections(vm) // resolve injections before data/props
 * initState(vm) // 数据状态初始化：data/props/methods/computed/watch
 * // 给后代提供数据
 * initProvide(vm) // resolve provide after data/props
 * callHook(vm, 'created')
 */
stateMixin(Vue); // $data/$props/$set/...
eventsMixin(Vue); // $on/$emit/$once/$off
lifecycleMixin(Vue); // _update/$forceUpdate/$destroy
renderMixin(Vue); // $nextTick/_render

export default Vue;
