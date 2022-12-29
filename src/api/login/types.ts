export interface IResponseType<P = any> {
    code?: number;
    data: P;
}
export interface ILogin {
    token: string;
    id: number;
    name: string;
}
