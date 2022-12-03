const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
app.use(cors());
app.use(express.json())
// app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
	console.log('req = ', req)
	res.status(200).send('I exist -- get')
})
app.post('/login', (req, res) => {
	console.log('req = ', req)
	res.status(200).send('I exist -- login post')
})

app.listen(8080, () => console.log('listening'))