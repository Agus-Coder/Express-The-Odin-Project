const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
  /* Object ID represents specific instances of a model in the database. 
  For example, a book might use this to represent its author object. 
  This will actually contain the unique ID (_id) for the specified object.*/
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],
    default: "Maintenance",
  },
  due_back: { type: Date, default: Date.now },
});

//virtual for bookinstance's URL
BookInstanceSchema.virtual("url").get(function () {
    return `/catalog/bookinstance/${this._id}`
})

//export model
module.exports = mongoose.model("BookInstance", BookInstanceSchema)