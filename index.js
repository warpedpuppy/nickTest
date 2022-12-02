const express = require('express');
const app = express();
const path = require('path')
app.use('/public', express.static(path.join(__dirname, 'public')))


// app.get('/', (req, res) => {
// 	res.status(200).send('I exist')
// })

app.listen(8080, () => console.log('listening'))