import { Express } from 'express';
import { Message } from '@models/message/message.model';
import { IMessage } from '@models/message/message.interface';
import { ApiResponse } from '@models/apiResponse/apiResponse.model';

export default function (app: Express): void {
    app.get('/messages', (req, res) => {
        const messages: IMessage[] = [
            new Message({
                id: 1,
                title: 'First message',
                subtitle: 'First message subtitle.',
                content: 'This is my first message.',
                auditInfo: null
            }),
            new Message({
                id: 2,
                title: 'Second message',
                subtitle: 'Second message subtitle.',
                content: 'This is my second message.',
                auditInfo: null
            }),
            new Message({
                id: 3,
                title: 'Third message',
                subtitle: 'Third message subtitle.',
                content: 'This is my third message.',
                auditInfo: null
            }),
        ];

        res.json(new ApiResponse('Successfully got messages.', messages));
    });
    
    app.get('/messages/:id', (req, res) => {
        res.json(`Hello ${req.params.id} server`);
    });
}