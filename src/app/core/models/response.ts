export class ErrorResponse {
    constructor(public error: string) { }
}

export enum ResponseType {
    CLEAR,
    PENDING,
    SUCCESS,
    ERROR
}

export class StoreResponse<T = null> {
    constructor(public data: T = null, public type: ResponseType = ResponseType.CLEAR, public error: string | null = null) { }
}

export class StorePending<T> extends StoreResponse<T> {
    constructor(data: T, error: string) {
        super(data, ResponseType.PENDING, error);
    }
}

export class StoreSuccessResponse<T> extends StoreResponse<T> {
    constructor(data?: T) {
        super(data, ResponseType.SUCCESS, null)
    }
}

export class StoreErrorResponse extends StoreResponse<null> {
    constructor(public error: string) {
        super(null, ResponseType.ERROR);
    }
}