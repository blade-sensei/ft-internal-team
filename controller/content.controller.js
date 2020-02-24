const express = require('express');

const router = express.Router();


router.get('', async (req, res) => {
    res.send('content page');
});

module.exports = router;