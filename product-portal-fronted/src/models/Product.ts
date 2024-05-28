import BaseResponse from "./BaseResponse";
import {StoreResponse} from "./Store";

export interface ProductResponse extends BaseResponse{
    name: string
    price: string
    slug: string
    category: string
    storeOwner: StoreResponse
    productUrls: string[]
    productImages: string[]
}

export interface ProductRequest {
    name: string
    price: number
    // product
}