var mysql = require('mysql');

class Tmp {

    connection = mysql.createConnection({
        host: 'localhost',
        //user: 'enkoadmin',
        //password: 'passworD',
        user: 'eadmin',
        password: 'eadmin123',
        database: 'bdEnko'
    });

}
module.exports = Tmp;