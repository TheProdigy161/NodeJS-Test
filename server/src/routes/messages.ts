import { Express } from 'express'
import { Message } from '../message';

export default function (app: Express): void {
    app.get('/messages', (req, res) => {
        const a: Message = new Message();
        res.json({ message: 'Messages API called.' });
    });
    
    app.get('/messages/:id', (req, res) => {
        res.json(`Hello ${req.params.id} server`);
    });
}