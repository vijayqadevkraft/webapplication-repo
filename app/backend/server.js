const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// ✅ Correct frontend path
app.use(express.static(path.join(__dirname, '../frontend')));

// API
app.get('/api', (req, res) => {
    res.json({ message: "✅ Backend Connected Successfully!" });
});

// Health check
app.get('/health', (req, res) => {
    res.status(200).json({ status: "OK" });
});

// ✅ FIXED LISTEN
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});
