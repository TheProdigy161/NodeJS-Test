import { IAuditInfo } from './../auditInfo/auditInfo.interface';

export interface IMessage {
    id: number;
    title: string;

    auditInfo: IAuditInfo;
}