// 读取系统的cpu信息
// console.log(process.argv)
// const os = require('os')
// const cpus = os.cpus();
// console.log(cpus.length)
// // 读取内存信息

// const total = os.totalmem() // bytes字节
// console.log(total/1024/1024/1024) // GB

// const freemem = os.freemem()
// console.log(freemem/1024/1024/1024, os.release())

// web服务

const http = require('http')
const server = http.createServer((req, res) => {
  res.end('hello world')
})
server.listen(3000, () => {
  console.log('代码启动1')
})

// 配置nodemon
// 1. npm i nodemon -D
// 2. 修改package.json 中启动命令
// "start": "nodemon ./src/index.js",
// "start:node": "node src/index.js",
// 3. 通过增加nodemon.json配置， 置顶，特定 watch 的文件
// 4.