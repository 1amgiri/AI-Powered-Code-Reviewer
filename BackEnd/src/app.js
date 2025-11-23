const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')
const path = require('path');

const app = express()

app.use(cors())


app.use(express.json())

app.use(express.static(path.join(__dirname, '../../Frontend/dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Frontend/dist', 'index.html'));
})

app.use('/ai', aiRoutes)

module.exports = app