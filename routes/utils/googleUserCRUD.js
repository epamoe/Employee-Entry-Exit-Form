const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const { authenticate } = require('@google-cloud/local-auth');
const { google } = require('googleapis');
require('coffee-script/register');



module.exports = {
    opts: {
        client: {
            id: '245661520998-kpur0fcekfgbdkgja419q3hddngcdhdg.apps.googleusercontent.com',
            secret: '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'
        },
        token: {
            refresh: "1//03UQ3sJTV5sapCgYIARAAGAMSNwF-L9IrJJRQdg70OjmWt-tH1L6UKPNj9TPA06P-jSaT10mnlXDVOCTraGFxjyI3nR8YesNTg8s"
        }
    },
    AdminSDK: require("./GoogleLib/google_api_admin_sdk.coffee"),
    GroupProvisioning: require("./GoogleLib/group_provisioning.coffee"),
    UserProvisioning: require("./GoogleLib/user_provisioning.coffee"),
    OrgUnitProvisioning: require("./GoogleLib/org_unit_provisioning.coffee"),
    Batch: require("./GoogleLib/batch.coffee"),
    GoogleQuery: require("./GoogleLib/query.coffee")
};