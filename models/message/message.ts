import { IMessage } from './message.d';

export class Message implements IMessage {
    id: number = 0;
    title: string = '';

    constructor(data?: IMessage) {
        if (!data)
            return;

        this.id = data.id;
        this.title = data.title;
    }
}