// let fs = require('fs')
// 异步
// fs.readFile('./test.text', (err, data) => {
//   console.log(err ? err : data.toString())
// })
// fs.writeFile('test.text', 'good', {flags: 'b'}, (err) => {
//   console.log(err)
// })
// let data = fs.readFileSync('./b.text')
// fs.unlinkSync('./a.js')

// const mode =  require('./mode')
// console.log(mode.a, mode.c)


// let http = require('http');
// let fs = require('fs')

// http.createServer((request, response) => {
//   // console.log('他来了他来了。')
//   fs.readFile(`./${request.url}`, (err, data)  => {
//     if (err) {
//       console.log(err);
//       response.writeHead(404)
//       response.end('404 not find')
//     } else {
//       response.end(data)
//     }
//   })
//   // response.end('index index')
// }).listen(8080)


//get
// let http = require('http')
// let fs = require('fs')
// let url = require('url')
// http.createServer((req, res) => {
//   console.log(url.parse(req.url, true))
//   let {pathname, query} = url.parse(req.url, true)
//   console.log(pathname, query)
// }).listen(8080)

//Post
let http = require('http')
let querystring = require('querystring')
http.createServer((req, res) => {
  let result = []
  req.on('data', Buffer => {
    result.push(Buffer)
  })
  req.on('end', () => {
    let data = Buffer.concat(result).toString()
    console.log(querystring.parse(data))
  })
  console.log()
}).listen('8080')