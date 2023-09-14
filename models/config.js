const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const mongoDB = "mongodb://127.0.0.1/my_database";

main().catch((err) => console.log(err));    
async function main() {
  await mongoose.connect(mongoDB);
}





// jFDdUraf99CSIBvA

// mongodb+srv://<username>:<password>@library-top.rjufpyh.mongodb.net/?retryWrites=true&w=majority