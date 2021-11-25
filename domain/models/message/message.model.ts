import { AuditInfo } from './../auditInfo/auditInfo.model';
import { IAuditInfo } from '../auditInfo/auditInfo.interface';
import { IMessage } from './message.interface';

export class Message implements IMessage {
    id: number = 0;
    title: string = '';
    subtitle: string = '';
    content: string = '';

    auditInfo: IAuditInfo;

    constructor(data?: IMessage) {
        if (!data)
            return;

        this.id = data.id;
        this.title = data.title;
        this.subtitle = data.subtitle;
        this.content = data.content;

        this.auditInfo = new AuditInfo(data.auditInfo);
    }
}