const http = require('http')
const url = require('url')
const querystring = require('querystring')
let user = {
  admin: 123456
}
http.createServer((req, res) => {
  let path , get , post
  if (req.method == 'GET') {
    let {pathname, query} = url.parse(req.url, true)
    path = pathname
    get=query
    complete()
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
  function complete() {
    if (path === '/login') {
      let {username, password} = get
      if (!user[]) {

      }
    } else if (path == '/reg') {

    } else {

    }
  }
}).listen('9000')