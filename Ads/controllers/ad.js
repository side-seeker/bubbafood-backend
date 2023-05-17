const chalk = require('chalk');
const salesforce = require('../../salesforce')
const status = require('http-status')


/**
 * Retrieves Ads from salesforce for a particular brand
**/
async function getAds(req, res) {
    try {
        const brand_id = req.params.brand_id;
        const result = await salesforce.conn
            .sobject("Advertisement__c")
            .select("Brand__c, Image__c, Go_to__c")
            .where({
                Brand__c: brand_id
            })
            .orderby("CreatedDate", "DESC")
            .execute((err, ret) => {
                if (err) {
                    throw err
                }
                console.log(chalk.green.bold(`Retrieved ${ret.length} records`))
                return ret
            })
        return res
            .status(status.OK)
            .json(result)
    } catch (error) {
        console.error(error);
        return res
            .status(status.INTERNAL_SERVER_ERROR)
            .send()
    }
}

/**
 * Retrieves Ads specifically for Homepages
**/
async function getHomePageAds(req, res) {
    try {
        const result = await salesforce.conn
            .sobject("Advertisement__c")
            .select("Brand__c, Image__c, Go_to__c")
            .where({
                in_home_page__c: true
            })
            .execute((err, ret) => {
                if (err) {
                    throw err
                }
                console.log(chalk.green.bold(`Retrieved ${ret.length} records`))
                return ret
            })
        return res
            .status(status.OK)
            .json(result);
    }
    catch (error) {
        console.error(error);
        return res
            .status(status.INTERNAL_SERVER_ERROR)
            .send()
    }
}

module.exports = {
    getAds,
    getHomePageAds
};
