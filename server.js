const express = require('express');
const userRoutes = require('./src/routes/userRoutes');
const { connectDB } = require('./src/services/db');

const app = express();
const port = 3000;

connectDB();

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use('/users', userRoutes);

// app.get("/", (req, res) => {
//     res.json({ message: "ok" });
// });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
