const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.status(200).send('I exist')
})

app.listen(8080, () => console.log('listening'))