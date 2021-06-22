const express = require('express');
const router = express.Router();

router.get('/posts', async function (req, res) {
    res.end();
});
router.get('/posts/:id', async function (req, res) {

});
router.post('/posts', async function (req, res) {

});
router.put('/put/:id', async function (req, res) {

});
router.delete('/posts/:id', async function (req, res) {

});



module.exports = router;