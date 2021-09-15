import { IAuditInfo } from '../auditInfo/auditInfo.interface';

export interface IUser {
    id: number;
    username: string;
    firstname: string;
    lastname: string;

    auditInfo: IAuditInfo;
}