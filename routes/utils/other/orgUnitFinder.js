module.exports = {

    getOrgFullText(organisationCode) {
        switch (organisationCode) {
            case "AGP":
                return "Amazing Grace Private School";
            case "EBK":
                return "Enko Bamako Campus";
            case "EBC":
                return "Enko Bonanjo Campus";
            case "EBT":
                return "Enko Botho Campus";
            case "EKG":
                return "Enko Keur Gorgui Campus";
            case "EOG":
                return "Enko Ouaga Campus";
            case "ERS":
                return "Enko Riverside Campus";
            case "ERV":
                return "Enko Riviera Campus";
            case "ESC":
                return "Enko Sekeleka Campus";
            case "EWC":
                return "Enko Waca Campus";
            case "EJA":
                return "Jacaranda Academy";
            case "PED":
                return "Pestalozzi Education Center";
            case "EGC-P":
                return "Enko La Gaieté";
            case "EGC-S":
                return "Enko La Gaieté";
            case "MKG":
                return "Central Office";
            case "IT":
                return "Central Office";
            case "FI":
                return "Central Office";
            case "L&T":
                return "Central Office";
            case "OPS":
                return "Central Office";
            case "":
                return "Central Office";
            case "ext":
                return "Ext";
            default:
                return "";
        }

    }
};