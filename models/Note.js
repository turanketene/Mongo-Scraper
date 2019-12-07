var mongoose = require("mongoose");
// Reference to schema constructor
var Schema = mongoose.Schema;
// Creating a new NoteSchema object by using the extended Schema constructor
var NoteSchema = new Schema({
  noteText: String
});
// This creates our model from the above schema, using mongoose's model method
var Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;