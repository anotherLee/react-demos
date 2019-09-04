import React from 'react'
import './App.css'
import Head from "./components/Head"
import List from './components/List'
import Foot from './components/Foot'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        { id: 1, name: '看书学习', finished: false },
        { id: 2, name: '看电影', finished: false },
        { id: 3, name: '出去跑步', finished: false }
      ]
    }
    this.add = this.add.bind(this)
    this.removeTask = this.removeTask.bind(this)
    this.changeTaskState = this.changeTaskState.bind(this)
  }


  /*
   * 添加任务
   */
  add(todo) {
    const { todos } = this.state
    todos.push(todo)
    this.setState({
      todos
    })
  }

  /*
   * 删除任务
   */
  removeTask(id) {
    let { todos } = this.state
    todos = todos.filter(item => item.id !== id)
    this.setState({
      todos
    })
  }

  /*
   * 标记任务是否完成
   */
  changeTaskState(e, id) {
    const { todos } = this.state
    todos.forEach(item => {
      if (item.id === id) {
        item.finished = e.target.checked
      }
    })
    this.setState({
      todos
    })
  }

  render() {
    const { todos } = this.state
    return (
      <div className='todo'>
        <div className='inner'>
          <Head todoCount={todos.length} add={this.add}/>
          <List todoList={todos} removeTodo={this.removeTask} changeState={this.changeTaskState}/>
          <Foot todoList={todos}/>
        </div>
      </div>
    )
  }
}

export default App
