import { Express } from 'express';
import messages from './messages';

export default function (app: Express): void {
    messages(app);
}