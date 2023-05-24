const mongoose = require("mongoose");


//Complete "creator_id" which is reference to another Mongoose model user.

const discussionSchema = mongoose.Schema({
  heading: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  creator_id:{ /* ... */ }
},
{ timestamps: true }
);

module.exports = mongoose.model("Discussion", discussionSchema);

