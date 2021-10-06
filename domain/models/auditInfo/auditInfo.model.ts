import { IAuditInfo } from './auditInfo.interface';
export class AuditInfo implements IAuditInfo {
    private _creationDate: Date = null;
    private _createdBy: string = null;
    private _updateDate: Date = null;
    private _updatedBy: string = null;
    
    get creationDate(): Date { return this._creationDate };
    get createdBy(): string { return this._createdBy };
    get updateDate(): Date { return this._updateDate };
    get updatedBy(): string { return this._updatedBy };

    constructor(data?: IAuditInfo) {
        if (!data)
            return;

        this._creationDate = data.creationDate ?? new Date();
        this._createdBy = data.createdBy;
        this._updateDate = data.updateDate;
        this._updatedBy = data.updatedBy;
    }

    setCreatedBy(user: string) {
        if (!user)
            throw "User cannot be null";

        this._createdBy = user;
    }

    setUpdateDate(date: Date) {
        if (!date)
            throw "Date cannot be null";

        this._updateDate = date;
    }

    setUpdatedBy(user: string) {
        if (!user)
            throw "User cannot be null";

        this._updatedBy = user;
    }
}