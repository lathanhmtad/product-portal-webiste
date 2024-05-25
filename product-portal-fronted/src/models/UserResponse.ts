import BaseResponse from "./BaseResponse";

export interface UserResponse extends BaseResponse {
    fullName: string
    email: string
    username: string
    phoneNumber:string
    avatar: string
    enabled: boolean
    role: string
}
