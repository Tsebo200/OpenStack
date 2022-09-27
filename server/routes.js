const express = require('express');;
const router = express();

router.post('/api/addUser', (req, res) => {
    const newUser = ({
        //add model here
    });

    newUser.save()
    .then(i => {
        res.json(i)
    })
    .catch(err => {
        res.status(400).json({msg: "User could not be added!", err});
    });

});

module.exports = router;