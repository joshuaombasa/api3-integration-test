class CustomError extends Error {
  statusCode = 400
  constructor(){
    super()
    Object.setPrototypeOf(this, CustomError.prototype)
  }
  serializeErrors() {
    
  }
}