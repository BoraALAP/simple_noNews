const express = require("express");
const router = express.Router();
const Comment = require("../models/comments");

router.get("/", async (req, res) => {
  try {
    const posts = await Comment.find().sort();
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  try {
    const post = new Comment({
      text: req.body.text,
      id: req.body.id,
      articleId: req.body.articleId
    });
    const posted = await post.save();
    res.json(posted);
  } catch (error) {
    console.log(error, "damn");
  }
});

router.get("/:postId", async (req, res) => {
  try {
    const postWithId = await Comment.findByIdAndUpdate(req.params.postId);
    res.json(postWithId);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Comment.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Comment.updateOne(
      { _id: req.params.postId },
      { $set: { text: req.body.text } }
    );
    res.json(updatedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
