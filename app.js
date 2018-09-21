const express = require('express')
const cp = require('child_process')
const webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware')
const WebpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')

const port = 3000
const app = express()

var compiler = webpack(config);
app.use(WebpackDevMiddleware(compiler,{
        publicPath:config.output.publicPath,
        stats: {
            colors: true
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