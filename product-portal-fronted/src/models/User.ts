import BaseResponse from "./BaseResponse";

export interface UserResponse extends BaseResponse {
    id: number,
    email: string,
    avatar: string,
    username: string,
    fullName: string,
    enabled: boolean,
    role: string,
    createdAt: string,
    phoneNumber: string
}