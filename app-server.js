var server = require('pushstate-server')

server.start({
  port: 9000, // 设置端口号
  directory: './dist',
})
