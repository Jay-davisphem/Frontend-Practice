function randRange(l, h) {
  /**
   Input: two imtegers l and h.
   Returns: an integer betweeen l and h(l inclusive, h exclusive)
   **/
  return Math.floor(Math.random() * (h - l)) + l;
}

function randInt(l, h) {
  /**
   Input: two imtegers l and h.
   Returns: an integer betweeen l and h(l and h inclusive)
  **/
  return Math.floor(Math.random() * (h - l + 1)) + l;
}
