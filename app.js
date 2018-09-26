const express = require('express')
const cp = require('child_process')
const webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware')
const WebpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')

const port = 3000
const app = express()

var compiler = webpack(config);
app.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  quiet: true, // 不显示控制台信息
  noInfo: true, // 不显示控制台信息（仅警告和错误）
  lazy: false, // 不切换懒惰模式
  hot: true,  // 是否启用热更新
  historyApiFallback: true, // 所有的url路径均跳转到index.html,需要设置为true，否则比如访问localhost:8888,就跳转不到/home页
  inline: true, // 是否实时刷新，即代码有更改，自动刷新浏览器
  progress: true, // 在控制台输出webpack的编译进度
  stats: {
    colors: true // 不同类型的信息用不同的颜色显示
  },
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
}
));
app.use(WebpackHotMiddleware(compiler));

app.listen(port, err => {
  if (err) {
    console.error(error)
  } else {
    console.info('\033[42;30m DONE \033[40;32m Compiled successfully in 100ms\033[0m')
    console.info('\033[44;30m I \033[0m Your application is running here: http://localhost:3000 \033')
  }
})
cp.exec(`start http://localhost:${port}/`)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

//静态文件
app.use(express.static('./'));