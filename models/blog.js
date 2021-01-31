const mongoose = require("mongoose");

const Schema = mongoose.Schema; //this is an object

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema); //this will be pluralized then search blogs collection
module.exports = Blog; // here is your blog model!

// schema: defines the structure of documents in mongodb
// model: is what surrounds that schema and provides interface for communicating with db
