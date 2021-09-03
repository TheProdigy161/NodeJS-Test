import { Express } from 'express';
import api from './api';
import messages from './messages';
import users from './users';

export default function(app: Express): void {
    api(app);
    messages(app);
    users(app);
}