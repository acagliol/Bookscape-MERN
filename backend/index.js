const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true,
}))


//KFPcHxS9hVjn6lcW

const bookRoutes = require('./src/books/book.route');

app.use("/api/books", bookRoutes)

async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.use('/', (req, res) => {
        res.send('Test to my server')
  })
}

main().then(()=> console.log("Running")).catch(err => console.log(err));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})