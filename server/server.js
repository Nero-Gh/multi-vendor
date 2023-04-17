const app = require("./app");
const connectDatabase = require("./db/Database");

//Handling uncaught exceptions

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("UNCAUGHT EXCEPTION! Shutting down...");
  //   process.exit(1);
});

//config
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: "./config/.env",
  });
}

//connect to database
connectDatabase();

//create server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

//unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("UNHANDLED PROMISE REJECTION! Shutting down...");
  server.close(() => {
    process.exit(1);
  });
});

/**
 * This code is a Node.js code that listens for an unhandled rejection event and logs the error message to the console along with a message “UNHANDLED REJECTION! Shutting down…”. Then it closes the server and exits the process with an exit code of 11.

The process.on() method is used to register a callback function that will be called when an unhandled rejection event occurs2. The unhandledRejection event is emitted whenever a Promise is rejected and no error handler is attached to it3.

The console.log() method logs the error message to the console1. The server.close() method closes the server1. The process.exit() method exits the process with an exit code of 11.

I hope this helps! Let me know if you have any other questions.
 */
