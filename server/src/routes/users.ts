import { Express } from 'express'

export default function (app: Express): void {
    app.get('/users', (req, res) => {
        // const users: IUser[] = [];
        res.json({ message: 'Users API called.' });
    });
    
    app.get('/users/:id', (req, res) => {
        res.json(`Hello ${req.params.id} server`);
    });
}