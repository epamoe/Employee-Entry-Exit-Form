const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const { authenticate } = require('@google-cloud/local-auth');
const { google } = require('googleapis');
require('coffee-script/register');

module.exports = {
    AdminSDK: require("./GoogleLib/google_api_admin_sdk.coffee"),
    GroupProvisioning: require("./GoogleLib/group_provisioning.coffee"),
    UserProvisioning: require("./GoogleLib/user_provisioning.coffee"),
    OrgUnitProvisioning: require("./GoogleLib/org_unit_provisioning.coffee"),
    Batch: require("./GoogleLib/batch.coffee"),
    GoogleQuery: require("./GoogleLib/query.coffee")
};