const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

// Rate limiting 
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 5
})
app.use(limiter);
app.set('trust proxy', 1);
// Routes
app.use('/api/v1/', require('./routes'));

// Enable CORS
app.use(cors());

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));