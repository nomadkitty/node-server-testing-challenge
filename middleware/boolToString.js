function boolToString(arr) {
  arr.map(item => {
    item.is_complete === 1
      ? (item.is_complete = true)
      : (item.is_complete = false);
  });
}

module.exports = boolToString;
