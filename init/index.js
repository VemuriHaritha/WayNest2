const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
if(process.env.NODE_ENV != "production"){
  require("dotenv").config();
}

// const MONGO_URL = "mongodb://localhost:27017/wanderlust";
const MONGO_URL = process.env.ATLAS_URL;
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    const updatedData = initData.data.map((obj) => ({
      ...obj,
      owner: "683fed0340f2a4fa6ef48e5a",
    }));
    await Listing.insertMany(updatedData);
    console.log("Data was initialized successfully.");
  } catch (err) {
    console.error("Error initializing data:", err);
  }
};

// const initDB = async () => {
//   await Listing.deleteMany({});
//   initData.data = initData.data.map((obj)=> ({
//     ...obj, 
//     owner:"6778f5bdeb3b766e3f69b182",
//   })); 
//   await Listing.insertMany(initData.data);
//   console.log("data was initialized");
// };

initDB();
