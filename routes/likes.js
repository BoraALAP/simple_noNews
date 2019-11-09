const express = require("express");
const router = express.Router();
const Likes = require("../models/likes");

router.get("/", async (req, res) => {
  try {
    const get = await Likes.find().sort()
    res.json(get)
  } catch (error) {
    res.json({ msg: error });
  }
});

router.post("/", async (req, res) => {
  try {
    const link = new Likes({
      id: req.body.id,
      title: req.body.title,
      published_date: req.body.published_date,
      abstract: req.body.abstract,
      multimedia: req.body.multimedia,
      date:req.body.date,
      short_url:req.body.short_url
    });

    const liked = await link.save();
    res.json(liked);
  } catch (error) {
    res.json({ msg: error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Likes.remove({id: req.params.id})
    res.json(deleted)
  } catch (error) {
    res.json({ msg: error });
  }
});

module.exports = router;
