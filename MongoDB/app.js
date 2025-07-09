const mongoose = require("mongoose");
const express = require("express");

// Create an express app
const app = express();

// Connect to MongoDB (with database name added)
mongoose
  .connect(
    "mongodb+srv://forterabox1708:YWgZxQOC17IlQI43@cluster0.fldsmnu.mongodb.net/"
  )
  .then(() => {
    console.log("✅ Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.error("❌ Error connecting to MongoDB:", error);
  });

// Create a schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model
const User = mongoose.model("User", userSchema);

// Create a new user
const createUser = async () => {
  try {
    const createdUser = await User.create({
      name: "Aaksh Singh",
      email: "akshsingh@example.com",
      age: 29,
      isActive: true,
      tags: ["Sales", "Marketing", "Development"],
    });

    console.log(" User created successfully:", createdUser);
    // save the user to the database
    await createdUser.save();
    console.log(" User saved to the database");

    // get All Users
    // const allUsers = await User.find({});
    // console.log("All Users:", allUsers);

    // get inActive Users false
    // const inActiveUsers = await User.find({isActive:false});
    // console.log("InActive Users:", inActiveUsers);

    // get Useres with findOne
    // const userByFindOneMethod = await User.findOne({
    //   name: "Jasmine Doe",
    // });
    // console.log("User found using findOne method:", userByFindOneMethod);

    // find User by ID
    // const userById = await User.findById(createdUser._id);
    // console.log("User found by ID:", userById);

    // get name and email of all users but not ID
    // const selectedFieldsUsers = await User.find().select("name email -_id");
    // console.log("Selected fields (name and email) of all users:", selectedFieldsUsers);

    // limited number of users and query will return 5 users, skipping the first one
    // const limitedUsers = await User.find().limit(5).skip(1);
    // console.log("Limited number of users:", limitedUsers);

    // sort users by age in descending order
    // const sortedUsers = await User.find().sort({
    //   age: -1, // -1 for descending order, 1 for ascending order
    // });
    // console.log("Sorted users by age in descending order:", sortedUsers);

    // count total number of users which is isActive
    // const activeUsers = await User.countDocuments({
    //   isActive: true,
    // });
    // console.log("Total number of active users:", activeUsers);

    // delete a user by ID
    // const deletedUser = await User.findByIdAndDelete(createdUser._id);
    // console.log("User deleted successfully:", deletedUser);

    //update a user by ID
    // const updateUser = await User.findByIdAndUpdate(
    //   createdUser._id,
    //   {
    //     $set: { age: 100 },
    //     $push: { tags: "Senior sales manager" },
    //   },
    //   { new: true }
    // );
    // console.log("User updated successfully:", updateUser);
    
  } catch (error) {
    console.error(" Error creating user:", error);
  } finally {
    await mongoose.connection.close();
    console.log(" MongoDB connection closed");
  }
};

// Call the function to create a user
createUser();
