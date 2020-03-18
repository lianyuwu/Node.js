const express = require('express')

const router =  express.Router();

// router
//     .[method]
//     router.all

//     router.use

router.get('/list', (req, res) => {
  res.json({
    list: [
      {
        id: 01,
        name: '露西'
      }
    ]
  })
})

module.exports = router