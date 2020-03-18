const express = require('express')

const router = express.Router()

// 1. 第一个场景
router.use(function (req, res, next) {
  console.log('log from router')
  next()
})

// 2. 路由内部使用
function vlaid_login_params(req, res, next) {
  let {name, password} = req.query;
  if (!name || !password) {
    res.json({
      message: '参数校验失败'
    })
  } else {
    next()
  }
}
router.get('/demo', [vlaid_login_params/** middleware */], (req, res) => {
  let formdata = req.query;
  console.log(formdata)
  res.json({
    formdata,
    message: 'from router demo'
  })
})

module.exports = router