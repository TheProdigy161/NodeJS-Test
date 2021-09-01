import express from 'express';
import cors from 'cors';
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'Base API called.' });
});

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});