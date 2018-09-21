import React, { Component } from 'react';
import Progress from '../../components/Progress'
import MessageBoard from '../../message_board'
import './index.less'

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      duration: 0
    }
  }
  componentDidMount() {
    let that = this
    this.changeVolumeHandler = this.changeVolumeHandler.bind(this)
    $("#player").jPlayer({
      ready: function (e) {
        $(this).jPlayer("setMedia", {
          mp3: 'http://sc1.111ttt.cn/2018/1/03/13/396131203208.mp3'
        }).jPlayer('play');
      },
      supplied: 'mp3',
      wmode: 'window'
    })
    $('#player').bind($.jPlayer.event.timeupdate, (e) => {
      that.setState({
        duration: e.jPlayer.status.duration,
        progress: e.jPlayer.status.currentPercentAbsolute
      })
    })
  }
  componentWillUnmount() {
    $("#player").unbind($.jPlayer.event.timeupdate);
  }
  changeVolumeHandler(progress) {
    let that = this
    $("#player").jPlayer("play", that.state.duration * progress);
    that.setState({
      progress: true
    });
  }
  render() {
    return (
      <div className="player-page">
        <h1 className="caption">我的私人音乐坊</h1>
        <div className="mt20 row">
          <div className="controll-wrapper">
            <h2 className="music-title">歌曲名称</h2>
            <h3 className="music-artist mt10">歌手</h3>
            <div className="row mt20">
              <div className="left-time -col-auto">-2：00</div>
              <div className="volume-container">
                <i className="icon-volume rt" style={{ top: 5, left: -5 }}></i>
                <div className="volume-wrapper">
                 音量控制部分
                </div>
              </div>
            </div>
            <div style={{ height: 10, lineHeight: '10px' }}>
              播放进度部分
              <Progress
                progress={this.state.progress}
                onProgressChange={this.changeVolumeHandler.bind(this)}
                barColor='#2f9842'
              >
              </Progress>
            </div>
            <div className="mt35 row">
              <div>
                <i className="icon prev"></i>
                <i className="icon ml20 play"></i>
                <i className="icon next ml20"></i>
              </div>
              <div className="-col-auto">
                <i className="icon repeat-random"></i>
              </div>
            </div>
          </div>
          <div className="-col-auto cover">
            {/* <i className="icon next"></i> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
