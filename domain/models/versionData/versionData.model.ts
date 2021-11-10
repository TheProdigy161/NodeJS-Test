import { IVersionData } from "./versionData.interface";

export class VersionData implements IVersionData {
    versionNumber: string;

    constructor(data?: IVersionData) {
        if (!data)
            return;

        this.versionNumber = data.versionNumber;
    }
}