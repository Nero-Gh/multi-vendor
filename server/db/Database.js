const moongose = require("mongoose");

const connectDatabase = () => {
  moongose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useCreateIndex: true,
    })
    .then((data) => {
      console.log(
        `MongoDB Database connected with HOST: ${data.connection.host}`
      );
    });
};

module.exports = connectDatabase;
/**
 * This code is using Mongoose to connect to a MongoDB database1. The mongoose.connect() method is used to connect to the database1. The first argument of this method is the URI of the database that you want to connect to1. The second argument is an object that contains options for the connection1.

*The useNewUrlParser option is used to parse the connection string1. The useUnifiedTopology option is used to use the new Server Discovery and Monitoring engine1. The useCreateIndex option is used to make Mongoose use MongoDB’s native findOneAndUpdate() rather than findAndModify()1.

*The then() method is used to handle the successful connection to the database1. It takes a callback function that logs a message to the console with the host of the connected database1.

 */
