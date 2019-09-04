/*
 * 1. reducer里的数据都会存储在store里
 * 2. reducer每次调用，更改的都是存放在store里的数据
 * 3. 组件需要调用store.getState()来获取store里的最新数据
 */
import {DELETE_TODO_ITEM} from "./actionType"

const defaultState = {
  todos: [
    { id: 1, title: '看一小时react课程', finished: false },
    { id: 2, title: '刷一小时B站', finished: false },
    { id: 3, title: '看书', finished: false },
    { id: 4, title: '睡觉', finished: false },
  ]
}

export default function (state = defaultState, action) {
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.todos = newState.todos.filter(item => item.id !== action.id)
    console.log(newState)
    return newState
  }

  return state
}
