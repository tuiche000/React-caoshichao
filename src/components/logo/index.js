import React from 'react'
import './index.less'

class LoGo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row components-logo">
        <img src="/static/images/logo.png" width="40" alt="" className="-col-auto" />
        <h1 className="caption">React Music Player Build By caoshichao</h1>
      </div>
    )
  }
}

export default LoGo