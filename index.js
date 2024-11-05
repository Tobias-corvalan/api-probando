const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/hash', (req, res) => {
    const input = req.body.input;

    if (!input) {
        return res.status(400).json({ error: 'Input cannot be null or empty.' });
    }

    const hash = crypto.createHash('sha256').update(input).digest('hex');
    return res.json({ hash });
});

app.listen(port, () => {
    console.log(`Hash API running at http://localhost:${port}`);
});
