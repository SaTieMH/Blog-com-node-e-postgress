const express = require('express'); 
const router = express.Router(); //
const postsService = require('../service/postService');

router.get('/', async function(req, res) {
    res.end();
});

router.get('/posts', async function (req, res) {
    const posts = await postsService.getPosts();
    res.json(posts);
});
router.get('/posts/:id', async function (req, res) {

});
router.post('/posts', async function (req, res) {

});
router.put('/posts/:id', async function (req, res) {

});
router.delete('/posts/:id', async function (req, res) {

});



module.exports = router;