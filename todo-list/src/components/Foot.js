import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Foot extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    todoList: PropTypes.array.isRequired
  }

  render() {
    const { todoList } = this.props
    const finishedTasks = todoList.filter(task => task.finished)
    return (
      <div className='summary'>
        <span>共{todoList.length}任务，</span>
        <span>已完成{finishedTasks.length}项</span>
      </div>
    )
  }
}

export default Foot
