// Declaring Mongoose package
var mongoose = require("mongoose");
// Reference to schema constructor 
var Schema = mongoose.Schema;
// Creating a new ArticleSchema object by using the extended Schema constructor
var ArticleSchema = new Schema({
  // headline is required and of type String
  headline: {
    type: String,
    required: true
  },
  // url is required and of type String
  url: {
    type: String,
    required: true
  },
  // summary is required and of type String
  summary: {
    type: String,
    required: true
  },
  // save is required and of type String
  saved: {
    type: Boolean,
    default: false
  },
  // `note` is an array that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  note: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }]
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;