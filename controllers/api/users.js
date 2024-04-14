const jwt = require('jsonwebtoken')
const User = require("../../models/user")
const bcrypt = require('bcrypt')


async function create(req, res) {
    try {
        const user = await User.create(req.body)
        const token = createJWT(user)
        res.json(token);
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

function checkToken(req, res) {
    console.log('req.user', req.user)
    res.json(req.exp)
}

async function login(req, res) {
    try {
        const user = await User.findOne({email:req.body.email})
        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) throw new Error("invalid username or password")
        const token = createJWT(user)
        res.json(token);
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

// helper funciton 
function createJWT(user) {
    return jwt.sign(
        // data payload
        {user},
        process.env.SECRET,
        { expiresIn: '24h' }
    )
}

module.exports = {
    create,
    login,
    checkToken
}




