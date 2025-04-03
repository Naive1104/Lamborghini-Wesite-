const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/lamborghini', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('MongoDB Connection Error:', err));

// Test Drive Request Schema
const testDriveSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    model: { type: String, required: true },
    message: String,
    timestamp: { type: Date, default: Date.now }
});

const TestDrive = mongoose.model('TestDrive', testDriveSchema);

// Routes
app.post('/api/test-drive', async (req, res) => {
    try {
        const testDrive = new TestDrive(req.body);
        await testDrive.save();
        res.status(201).json({ message: 'Test drive request submitted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all test drive requests (admin only)
app.get('/api/test-drive', async (req, res) => {
    try {
        const requests = await TestDrive.find().sort({ timestamp: -1 });
        res.json(requests);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 