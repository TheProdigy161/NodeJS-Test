import { StatusCode } from '../../enums/statusCode';
import { IApiResponse } from './apiResponse.interface';

export class ApiResponse<T> implements IApiResponse<T> {
    message: string;
    statusCode: StatusCode;
    success: boolean;
    body: T;

    constructor(message: string, body?: T, statusCode?: StatusCode) {
        this.body = body ?? null;
        this.message = message ?? 'Message not provided.';
        this.statusCode = statusCode ?? this.getStatusFromBody();
    }

    private getStatusFromBody(): StatusCode {
        if (!this.body)
            return StatusCode.NO_CONTENT;

        if ((this.body as unknown as [])?.length === 0)
            return StatusCode.NO_CONTENT;

        return StatusCode.OK;
    }

    isSuccessfulStatusCode(): boolean {
        const statusCodeNumber: number = (this.statusCode as number);
        return statusCodeNumber >= 200 && statusCodeNumber < 300;
    }
}