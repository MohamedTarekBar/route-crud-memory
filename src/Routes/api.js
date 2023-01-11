const express = require('express')
const postRoute = require('./api/post.routes')
const userRoute = require('./api/user.routes')
const router = express.Router()

router.use('/users',userRoute)
router.use('/posts',postRoute)

module.exports = router
