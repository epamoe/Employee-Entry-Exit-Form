module.exports = {

    getOrgFullText(organisationCode) {
        switch (organisationCode) {
            case "AGP":
                return "/Schools/Amazing Grace Private School";
            case "EBK":
                return "/Schools/Enko Bamako Campus";
            case "EBC":
                return "/Schools/Enko Bonanjo Campus";
            case "EBT":
                return "/Schools/Enko Botho Campus";
            case "EKG":
                return "/Schools/Enko Keur Gorgui Campus";
            case "EGC-P":
                return "/Schools/Enko La Gaieté/International Primary School";
            case "EGC-S":
                return "/Schools/Enko La Gaieté/International Secondary School";
            case "EOG":
                return "/Schools/Enko Ouaga Campus";
            case "ERS":
                return "/Schools/Enko Riverside Campus";
            case "ERV":
                return "/Schools/Enko Riviera Campus";
            case "ESC":
                return "/Schools/Enko Sekeleka Campus";
            case "EWC":
                return "/Schools/Enko Waca Campus";
            case "EJA":
                return "/Schools/Jacaranda Academy";
            case "PED":
                return "/Schools/Pestalozzi Education Center";
            case "MKG":
                return "/Central Office";
            case "IT":
                return "Central office";
            case "FI":
                return "/Central office";
            case "L&T":
                return "/Central office";
            case "OPS":
                return "/Central office";
            case "":
                return "/Central office";
            case "ext":
                return "/Schools/External";
            default:
                return "";
        }

    }
};