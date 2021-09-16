import { StatusCode } from "../../enums/statusCode";

export interface IApiResponse<T> {
    message: string;
    statusCode: StatusCode
    body: T | T[];

    isSuccessfulStatusCode(): boolean;
}