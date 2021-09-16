import { AuditInfo } from './../auditInfo/auditInfo.model';
import { IAuditInfo } from '../auditInfo/auditInfo.interface';
import { IUser } from './user.interface';

export class User implements IUser {
    id: number;
    username: string;
    firstname: string;
    lastname: string;

    auditInfo: IAuditInfo;

    constructor(data?: IUser) {
        if (!data)
            return;

        this.id = data.id;
        this.username = data.username;
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        
        this.auditInfo = new AuditInfo(data.auditInfo);
    }
}