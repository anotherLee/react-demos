/*
 * 1. 这里对外暴露的store是直接给组件使用
 * 2. 组件通过store.getState()可以直接调用reduce里的方法，并获取返回值
 * 3. store还有dispatch分发action功能，它会再次调用reducer来更新store里的数据
 * 4. 当数据发生改变，组件里需要store订阅才能知道更改再更新数据
 */
import {createStore} from "redux"
import reducer from "./reducer"

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;
