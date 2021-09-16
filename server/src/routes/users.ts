import { Express } from 'express';
import { User } from '@models/user/user.model';
import { IUser } from '@models/user/user.interface';

export default function (app: Express): void {
    app.get('/users', (req, res) => {
        const users: IUser[] = [];
        const a: User = new User();
        res.json({ message: 'Users API called.' });
    });
    
    app.get('/users/:id', (req, res) => {
        res.json(`Hello ${req.params.id} server`);
    });
}