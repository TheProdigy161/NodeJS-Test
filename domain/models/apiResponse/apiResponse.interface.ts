export interface IApiResponse<T> {
    message: string;
    successCode: StatusCodes
    success: boolean;
    body: T;
}