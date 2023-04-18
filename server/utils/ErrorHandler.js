class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorHandler;

/**
 * This code defines a class called ErrorHandler that extends the built-in Error class1. The constructor of this class takes two arguments: statusCode and message1. The super() method is used to call the constructor of the parent class (Error) and pass it the message argument1.

The this.statusCode and this.message properties are then set to the values of the corresponding arguments1.

The Error.captureStackTrace() method is used to capture a stack trace at the point where this constructor was called1. This method takes two arguments: an error object and an optional constructor function1. In this case, it’s being called on the current instance of the error object (this) and passing in its own constructor function1.
 */
