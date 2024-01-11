const { Router } = require("express");
const feed = require("../data/feed.json");
const comments = require("../data/comments.json");

const PAGE_SIZE = 5;

const router = Router();

router.get("/", (req, res) => {
  const { last_ref, page_size = PAGE_SIZE } = req.query;

  const startIndex = feed.findIndex((item) => item.briefref === last_ref) + 1;

  res.json(feed.slice(startIndex, startIndex + page_size));
});

router.get("/:briefref/comments", (req, res) => {
  const feedComments = comments.filter(
    (comment) => comment.briefref === req.params.briefref
  );

  res.json(feedComments);
});

module.exports = router;
