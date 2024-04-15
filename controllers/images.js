async function upload(req, res) {
    console.log(req.body)
    res.status(200).json({msg: "ok"})
}

module.exports = {
    upload: upload,
}