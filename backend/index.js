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
const orderRoutes = require('./src/orders/order.route');
const userRoutes = require('./src/users/user.route');

app.use("/api/books", bookRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/auth", userRoutes)

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