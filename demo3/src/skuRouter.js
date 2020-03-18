const express = require('express')
const router = express.Router()

router.get('/list', (req, res) => {
  res.json({
    list: [
      {
        id: 02,
        name: 'china'
      }
    ]
  })
})
module.exports = router