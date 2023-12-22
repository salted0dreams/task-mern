require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const taskRoute = require('./routes/task.route');

const app = express();
connectDB();

app.use(cors({ origin: true, credentials: true}));
app.use(express.json(extended = false));

const port = process.env.PORT || 3000;

app.use('/api/task', taskRoute);
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);


const server = app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    server.close(() => process.exit(1));
})