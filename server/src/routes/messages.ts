import { Express } from 'express';

export default function (app: Express): void {
    app.get('/messages', (req, res) => {
        res.json({ message: 'Messages API called.' });
    });
    
    app.get('/messages/:id', (req, res) => {
        res.json(`Hello ${req.params.id} server`);
    });
}