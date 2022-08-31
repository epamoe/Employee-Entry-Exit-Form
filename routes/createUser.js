var axios = require('axios');
const data = JSON.stringify({
    message: 'Hello World!'
})

const url = "https://localhost/WeatherAPI";

axios({
        method: 'POST',
        url: 'https://admin.googleapis.com/admin/directory/v1/users',
        data: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
    })
    .then((res) => {
        console.log(`statusCode: ${res.status}`)
        console.log(res)
    })
    .catch((error) => {
        console.error(error)
    })