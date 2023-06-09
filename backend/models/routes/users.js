const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json("Error " + err));
});

router.route('/add').post((req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const date = Date.parse(req.body.date);
    
    //need to encrypt password

    const newUser = new User({email, password, date});

    newUser.save()
        .then(() => res.json('User added successfully'))
        .catch(err => res.status(400).json("Error " + err));

});

module.exports = router;