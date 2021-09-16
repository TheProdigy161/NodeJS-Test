export interface IAuditInfo {
    creationDate: Date;
    createdBy: string;
    updateDate: Date;
    updatedBy: string;

    setCreatedBy(user: string): void;
    setUpdateDate(date: Date): void;
    setUpdatedBy(user: string): void;
}