const express = require('express')
const app = express();
const port = 4000;
var cors = require('cors');

app.use(cors());
app.get('/hello', (req, res) => res.send('Hello World!'))
app.use(express.static('./client'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

