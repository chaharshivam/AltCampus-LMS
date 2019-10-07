const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    about: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    article_type: {
      type: String,
      required: true,
      default: "general"
    }
  },
  { timestamps: true }
);

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
