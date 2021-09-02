import { Express } from 'express';
import api from './api';
import messages from './messages';

export default function (app: Express): void {
    api(app);
    messages(app);
}