import React from 'react'
import './index.less'

class CommentBox extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      message: ''
    }
  }
  fn() {
    this.props.cb(this.state.message)
    this.refs['msg_box'].value = ''
    this.setState({
      message: ''
    })
  }
  change(ev) {
    this.setState({
      message: ev.currentTarget.value
    })
  }
  render() {
    return <div className="container">
      <header>
        <h5>留下评论</h5>
      </header>
      <div className="body">
        <textarea ref="msg_box" placeholder="输入你的评论内容" defaultValue={this.state.message} onChange={this.change.bind(this)}></textarea>
      </div>
      <footer>
        <button onClick={this.fn.bind(this)}>发表</button>
        <span>已有{this.props.list.length}条评论</span>
      </footer>
    </div>
  }

}

export default CommentBox