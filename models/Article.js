const mongoose = require("mongoose");

let Schema = mongoose.Schema;

//create new schema model
let ArticleSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  link: {
    type: String,
    required: true
  },
  //create note with linked OBject ID
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

let Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
