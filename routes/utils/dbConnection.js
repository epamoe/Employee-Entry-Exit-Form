var mysql = require('mysql');

class Tmp {

    connection = mysql.createConnection({
        host: 'localhost',
        user: 'enkoadmin',
        password: 'passworD',
        database: 'bdEnko'
    });

}
module.exports = Tmp;