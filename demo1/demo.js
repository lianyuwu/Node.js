const http = require('http')
const url = require('url')
const querystring = require('querystring')
http.createServer((req, res) => {
  let path , get , post
  if (req.method == 'GET') {
    let {pathname, query} = url.parse(req.url, true)
    path = pathname
    get=query
  } else if (req.method == "POST") {
    let arr = []
    req.on('data', Buffer => {
      arr.push(Buffer)
    })
    req.on('end', Buffer=> {
      post =querystring.parse(Buffer.concat(arr).toString())
    })
  } else {

  }
}).listen('9000')