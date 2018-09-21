import React from 'react'
import './index.less'

class CommentList extends React.Component {
  constructor(props) {
    super(props)
  }
  del(id) {
    this.props.del(id)
  }
  render() {

    return <div className="container">
      <header>
        <h5>评论列表</h5>
      </header>
      <div className="list">
        <ul>
          {
            this.props.list.map(comment =>
              <li key={comment.id}>
                <span>{comment.text}</span>
                <button onClick={this.del.bind(this, comment.id)}>删除</button>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  }

}

export default CommentList