class ExpressError extends Error {
    constructor (message, status) {
        this.message = message;
        this.status = status;
    }
}

class BadRequestError extends ExpressError {

}

class NotFoundError extends ExpressError {
    
}