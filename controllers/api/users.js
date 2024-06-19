const jwt = require('jsonwebtoken')
const User = require("../../models/user")
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer")


async function create(req, res) {
    try {
        const user = await User.create(req.body)
        const token = createJWT(user)
        const email = req.body.email
        let transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
                user: process.env.REACT_APP_MAIL_ADDRESS,
                pass: process.env.REACT_APP_MAIL_PASSWORD
            }
        });
        const mailOptions = {
            from: process.env.REACT_APP_MAIL_ADDRESS,
            to: email,
            subject: 'Welcome to our performanceXpert',
            text: 'Thank you for registering with us.'
          };

        // await transporter.sendMail(mailOptions);
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




