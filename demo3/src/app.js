
const express = require('express');
// app 是一个express 实例
const app = express()

// app.get('/name/:age', (req, res) => {
//   let {age} = req.params
//   console.log(req.params)
//   res.json({
//     name: '小明',
//     age: age
//   })
//   res.send('tom')
// })

// app.post('/name', (req, res) => {
//   res.send('ton post')
// })

// 1.通过 请求方式类型 get/post/...
// app.get('/demo', (req, res) => {
//   // req: 请求对象
//   // res: 服务器响应对象
//   res.json({
//     message: 'hello express route from get demo'
//   })
// })

// app.post('/demo', (req, res) => {
//   res.json({
//     message: 'hello world'
//   })
// })
// 2. 通过uri
// app.get('/user/byname', (req, res) => {
//   let {name} = req.query;
//   res.json({
//     name
//   })
// })
// app.get('/user/byid', (req, res) => {
//   let {id} = req.query;
//   res.json({
//     id
//   })
// })

// 2. app.all   2).任何请求
// app.all('*', (req, res) => {
//   res.json({
//     message: 'demo',
//     uri: req.path
//   })
// })

// 3. use  --> 中间件
// app --> Application --> web服务的实例
// app.use('/demo', (req, res)=> {
//   res.json({
//     message: 'demo'
//   })
// })

// 4. 路由的拆分
// member
// sku
// order

// const memberRouter = require('./member.router');
// const skuRouter = require('./skuRouter')
// // 注册路由
// app.use('/member', memberRouter)
// app.use('/sku', skuRouter)


// 5. 中间件 完整的结构
// 1. 是一个函数
// 2. err, req, res, next --> function

// app 级别的使用
//  1).注册的时候，一定是在最顶级
//  2).app.use --> api去加载进来
// 路由级别

// function log_middleware(req, res, next) {
//   console.log('骑牛')
//   next()
// }
// app.use(log_middleware)
// // 加载一个
// app.use(express.static('static', {
//   extensions: ['html', 'htm']
// }))
// function demo_middlewate(err, req, res, next) {
//   // 1. 异常
//   // 2. 处理下业务功能， 然后转交控制权 -- next
//   // 3. 响应请求 -- 结束响应 --> 当作路由的处理函数
// }

// test?name=2323
// function valid_name_middlewate(req, res, next) {
//   let {name} = req.query;
//   console.log(!name || !name.length, req.query, name, !name)
//   if (!name || !name.length) {
//     res.json({
//       message: '缺少name参数'
//     })
//   } else {
//     next()
//   }
// }

// app.all('*', valid_name_middlewate)


// 路由级别
// const userRouter = require('./router/user_router')
// app.use('/user', userRouter)

// app.get('/list', (req,res) => {
//   res.json({
//     name: 'sss'
//   })
// })


// 异常处理
function  error_handler_middleware(err, req, res, next) {
  if (err) {
    res.status(500)
    .json({
      message: '服务器异常'
    })
  } else {
    next()
  }
}

function not_found_handler(req, res, next) {
  res.json({
    message: 'api不存在'
  })
}

function demo_middleware(req, res, next) {
  try {
    // mysql 操作
  } catch (error) {
    next(error)
  }
}
// tips ： 异常处理一定是 收口的。

app.get('/demo3', (req, res) => {
  throw new Error('测试异常功能')
  // res.json({
  //   message
  // })
})
app.use(not_found_handler)
app.use(error_handler_middleware)

app.listen(8080, () => {
  console.log("结束")
})