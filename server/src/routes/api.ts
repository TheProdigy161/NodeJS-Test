import { Express } from 'express'

export default function (app: Express): void {
    app.get('/api', (req, res) => {
        res.json({ message: `API called.` });
    });

    app.get('/api/version', (req, res) => {
        res.json({ message: `V${process.env.APP_VERSION}` });
    });

    app.get('/api/healthcheck', (req, res) => {
        res.json({ message: 'API is functioning normally.' });
    });
}