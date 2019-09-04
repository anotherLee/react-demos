import React, {Component} from 'react'
import store from '../store'
import {deleteItemAction} from '../store/actionCreator'

class List extends Component {
  constructor() {
    super(undefined)
    this.state = store.getState()

    this.handleStoreChange = this.handleStoreChange.bind(this)
    // 订阅store里的数据变化，如果变化了会调用handleStoreChange方法
    store.subscribe(this.handleStoreChange)
  }

  render() {
    const { todos } = this.state
    return (
      <div className='list'>
        {
          todos.map(todo => {
            return (<div key={todo.id}>
              <span>{todo.title}</span>
              <span
                style={{ marginLeft: '10px', cursor: 'pointer' }}
                onClick={() => this.handleDelete(todo.id)}
              >删除</span>
            </div>)
          })
        }
      </div>
    )
  }

  handleDelete(id) {
    const action = deleteItemAction(id)
    store.dispatch(action)
  }

  // 更新数据
  handleStoreChange() {
    this.setState(store.getState())
  }
}

export default List
