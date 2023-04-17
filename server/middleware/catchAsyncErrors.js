module.exports = (theFunction) => (req, res, next) => {
  Promise.resolve(theFunction(req, res, next)).catch(next);
};

/**
 * This code exports a function that takes another function as an argument. The returned function takes three arguments: req, res, and next.

*The Promise.resolve() method is used to wrap the invocation of the passed-in function in a promise. This allows any errors that occur during *execution to be caught by the .catch() method.

*The .catch() method is called on the promise returned by Promise.resolve() and passes in the next function as its argument. This ensures that *any errors that occur during execution are passed to the error-handling middleware.
 */
