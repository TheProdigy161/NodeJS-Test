import 'dotenv/config';

import cors from 'cors';
import express from 'express';
import routes from '@routes/_routes';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
routes(app);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});