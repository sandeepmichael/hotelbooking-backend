const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

//connecting to  database
mongoose.connect(process.env.MONGO_ID, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log('mongodb connected')
}).catch((err) => {
    console.error(err)
})
app.use(express.json())

//
app.use('/api', require('./routes/roomRoutes'))
app.use('/api/users', require('./routes/usersRoutes'))
app.use('/api/bookings', require('./routes/bookingRoutes'))


const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
    console.log('server is running on port 5000')
})