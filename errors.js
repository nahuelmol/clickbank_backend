Aconst httpStatusCodes = require('httpStatusCodes')

class BaseError extends Error {
        constructor(name, statusCode, description){
        }
}

class a404Error extends BaseError {

}

module.exports = {
    a404Error
}
