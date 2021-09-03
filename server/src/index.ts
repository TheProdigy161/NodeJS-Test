import express from 'express';
import cors from 'cors';
import routes from './routes/_routes';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
routes(app);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});