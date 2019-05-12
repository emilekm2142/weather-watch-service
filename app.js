const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const axios = require('axios')
function convertKelvinToCelsius(kelvin) {
	if (kelvin < (0)) {
		return 'below absolute zero (0 K)';
	} else {
		return (kelvin-273.15);
	}
}
KEY = 'fd478bec6522720d1357e3d157711e3f'
app.get('/', function(req, res) {
    //req.query.nazwa
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${KEY}`)
    .then(function (response) {
        let rd=response.data;
        res.send(`${rd.weather[0].main}\n${Math.round(convertKelvinToCelsius(rd.main.temp))}\n`);
    })
    .catch(function (error) {
        console.log(error);
    });
 
  });
app.listen(port, () => console.log(`Example app listening on port ${port}!`))