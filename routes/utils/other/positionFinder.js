module.exports = {

    getPositionFullText(positionCode) {
        switch (positionCode) {
            case "teacher":
                return "Learning & Teaching";
            case "hos":
                return "Head Of School";
            case "mo":
                return "Marketing Officer";
            case "pro":
                return "Parent Relations Officer";
            case "hr":
                return "Human Ressource";
            case "it":
                return "IT";
            case "finance":
                return "Finance";
            case "ext":
                return "External";
            default:
                return "";
        }

    }

};