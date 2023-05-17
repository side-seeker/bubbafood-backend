const status = require("http-status")
const { upload } = require("../utils/upload")
const chalk = require("chalk")

function hello(req, res) {
    return res.send("<h1>hello</h1>")
}

async function upload_test(req, res) {
    const image = req.body.image
    const name = req.body.name
    const ext = req.body.ext

    try {
        const uploaded_image = await upload(image, name, ext)
        console.log(uploaded_image)
    } catch (err) {
        console.log(err)
        return res
            .status(status.INTERNAL_SERVER_ERROR)
            .send()
    }

    return res
        .status(status.OK)
        .send()
}

module.exports = {
    hello,
    upload_test
}
