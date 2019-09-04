import React, {Component} from 'react'
import PropTypes from 'prop-types'

class List extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    todoList: PropTypes.array.isRequired,
    removeTodo: PropTypes.func.isRequired,
    changeState: PropTypes.func.isRequired
  }

  render() {
    const { todoList, removeTodo, changeState } = this.props
    return (
      <ul className='list'>
        {
          todoList.length > 0 ?
            todoList.map(item => {
              return (
                <li key={item.id}>
                  <input onChange={e => changeState(e, item.id)} checked={item.finished} type="checkbox"/>
                  <span>{item.name}</span>
                  <button
                    className='removeButton'
                    onClick={() => removeTodo(item.id)}
                  >删除
                  </button>
                </li>
              )
            }) :
            <li>没有数据</li>
        }
      </ul>
    )
  }
}

export default List
