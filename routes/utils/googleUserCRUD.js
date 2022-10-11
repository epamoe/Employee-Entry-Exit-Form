const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const { authenticate } = require('@google-cloud/local-auth');
const { google } = require('googleapis');
require('coffee-script/register');



module.exports = {
    opts: {
        client: {
            id: '153448695824-vc7l1fgl4gf1mmvnfmkbsrg0gj8l51bp.apps.googleusercontent.com',
            secret: "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"
        },
        token: {
            refresh: "1//0375UHUE3NINzCgYIARAAGAMSNwF-L9Ird57cGvmhgYbY55xmaSkqnZ7Cmfd2e8D_WWmi2_toe3NNcdxO8l6yCGH67f-T_2e_Asc"
        }
    },
    orgUnits: {
        AGP: 'Amazing Grace Private School',
        EBK: 'Enko Bamako Campus',
        EBC: 'Enko Bonanjo Campus',
        EBT: 'Enko Botho Campus',
        EKG: 'Enko Keur Gorgui Campus',
        EOG: 'Enko Ouaga Campus',
        EVS: 'Enko Riverside Campus',
        ERV: 'Enko Riviera Campus',
        ESC: 'Enko Sekeleka Campus',
        EWC: 'Enko Waca Campus',
        EJA: 'Jacaranda Academy',
        PED: 'Pestalozzi Education Center',
        'EGC-P': 'Enko La Gaieté Primary',
        'EGC-S': 'Enko La Gaieté Secondary',
        MKG: 'Central Office',
        IT: 'Central Office',
        FI: 'Central Office',
        'L&T': 'Central Office',
        OPS: 'Central Office',
        LDS: 'Central Office',
    },

    AdminSDK: require("./GoogleLib/google_api_admin_sdk.coffee"),
    GroupProvisioning: require("./GoogleLib/group_provisioning.coffee"),
    UserProvisioning: require("./GoogleLib/user_provisioning.coffee"),
    OrgUnitProvisioning: require("./GoogleLib/org_unit_provisioning.coffee"),
    Batch: require("./GoogleLib/batch.coffee"),
    GoogleQuery: require("./GoogleLib/query.coffee"),

};