const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const dbConnection = require('./db')
const dotenv = require('dotenv')
const cors = require('cors');

app.use(cors());
app.use(express.json())
dotenv.config();

app.use('/api/users/' , require('./routes/userRoute'))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`))