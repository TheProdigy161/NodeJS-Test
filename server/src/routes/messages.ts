import { Express } from 'express';
import { IMessage } from '../../../models/message/message.interface';
import { Message } from '../../../models/message/message.model';

export default function (app: Express): void {
    app.get('/messages', (req, res) => {
        const ms: IMessage = new Message();
        res.json({ message: 'Messages API called.' });
    });
    
    app.get('/messages/:id', (req, res) => {
        res.json(`Hello ${req.params.id} server`);
    });
}