const express = require('express');
const bodyParser=require('body-parser')
const api = ('./routes/api');

const app = express();

//init api route
app.use('/api', api);
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('You are Home');
})

app.listen(process.env.PORT || 8080, () => {
    console.log('Server running on port 8080');
})