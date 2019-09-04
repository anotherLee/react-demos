import React, {Component} from 'react'
import PropTypes from 'prop-types'

const ENTER_KEY = 13

class Head extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputContent: ''
    }
  }

  static propTypes = {
    add: PropTypes.func.isRequired,
    todoCount: PropTypes.number.isRequired
  }

  render() {
    const { inputContent } = this.state
    return (
      <div className="headerWrapper">
        <input
          onKeyDown={e => this.confirm(e)}
          onChange={e => this.input(e)}
          value={inputContent}
          type="text"
          placeholder='请输入今天的任务清单，按回车键结束'/>
      </div>
    )
  }

  confirm(e) {
    const { inputContent } = this.state
    const { todoCount, add } = this.props
    if (e.keyCode === ENTER_KEY) {
      add({id: Date.now(), name: inputContent, finished: false})
      this.setState({
        inputContent: ''
      })
    }
  }

  input(e) {
    this.setState({
      inputContent: e.target.value
    })
  }
}

export default Head
