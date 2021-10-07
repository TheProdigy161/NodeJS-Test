import { Express } from 'express';
import api from '@routes/api';
import messages from '@routes/messages';
import users from '@routes/users';

export default function(app: Express): void {
    api(app);
    messages(app);
    users(app);
}