const salesforce = require('../salesforce')

/**
 * Uploads the file to Content Version
 * @param image - Base64 encoded image
 * @param filename - Name of the image
**/
async function upload(image, filename, ext) {
    const result = await salesforce.conn
        .sobject('ContentVersion')
        .create({
            Title: `${filename}.${ext}`,
            PathOnClient: `/${filename}.${ext}`,
            VersionData: Buffer.from(image, 'base64').toString(),
        }, (err, ret) => {
            if (err) {
                throw err
            }
            return ret
        })
        .catch((err) => {
            console.log(err)
        })
    return result
}

module.exports = {
    upload
}
