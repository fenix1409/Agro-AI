import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js'

const app = express()

await connectDB()

// Middleware
app.use(cors())
app.use(express.json())

// Routesss
app.get('/', (req, res)=> res.send("Server is Running"))

const PORT = process.env.PORT || 5173

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})