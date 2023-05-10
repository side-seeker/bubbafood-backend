const salesforce = require('../../salesforce')

async function getAds(req, res) {
    const brand_id = req.params.brand_id;

    try {
        const result = await salesforce.conn.query("SELECT Name, Image__c, Go_to__c FROM Advertisement__c WHERE Brand__c = '" + brand_id + "'");
        console.log(result.records)
        return res.status(200).json(result.records);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error retrieving ads from Salesforce" });
      }
}

async function getHomepageads(req,res) {
    try {
      const result = await salesforce.conn.query(" SELECT Name, Image__c, Go_to__c FROM Advertisement__c WHERE in_home_page__c = true ");
      console.log(result.records)
      return res.status(200).json(result.records);
    }
    catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error retrieving ads for home Page from Salesforce" });
    }
}

module.exports = {
    getAds,
    getHomepageads
  };
