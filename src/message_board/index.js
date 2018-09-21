import React from 'react'
import CommentList from './commentList.js'
import CommentBox from './commentBox.js'

class MessageBoard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [{ id: 0, text: '初始的留言' }]
    }
  }
  fn(params) {
    this.setState({
      list: [
        ...this.state.list,
        {
          id: this.state.list.length,
          text: params
        }
      ]
    })
  }
  del(id) {
    let current_del = this.state.list.forEach((item, index) => {
      if (item.id == id) {
        this.state.list.splice(index, 1)
      }
    })
    this.setState({
      state: this.state.list
    })
  }
  render() {
    let list = this.state.list

    return <div style={{ background: '#ccc' }}>
      <h1>React 留言板</h1>
      <CommentList list={list} del={this.del.bind(this)} />
      <hr></hr>
      <CommentBox list={list} cb={this.fn.bind(this)} />
    </div>
  }
}

export default MessageBoard