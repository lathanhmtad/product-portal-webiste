export interface ListResponse<T> {
    data: T[]
    last: boolean,
    pageNumber: number,
    pageSize: number,
    totalElements: number,
    totalPages: number
}