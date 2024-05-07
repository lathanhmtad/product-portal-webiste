import BaseResponse from "./BaseResponse";
import {UserResponse} from "./User";

export interface StoreResponse extends BaseResponse {
    id: number,
    name: string,
    urlStore: string,
    enabled: boolean
    owner: UserResponse
}