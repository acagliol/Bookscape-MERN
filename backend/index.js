const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

// 1. Use JSON middleware
app.use(express.json());

// 2. Configure CORS *before* any routes
app.use(cors({
  origin: [
    'http://localhost:5173', 
    'https://bookscape-frontend-tau.vercel.app'
  ],
  credentials: true
}));

// Then define your routes
const bookRoutes = require('./src/books/book.route');
const orderRoutes = require('./src/orders/order.route');
const userRoutes = require('./src/users/user.route');
const adminRoutes = require('./src/stats/admin.stats');

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

async function main() {
  await mongoose.connect(process.env.DB_URL);

  // This route is just a test response
  app.use('/', (req, res) => {
    res.send('Test to my server');
  });
}

main()
  .then(() => console.log("Running"))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
