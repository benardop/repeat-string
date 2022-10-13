function repeatStringNumTimes(str, num) {
    // write your code here
    let text = "";
    if (num < 1) return text;
    for (let i = 1; i <= num; i++) {
      text = text + str;
    }
    return text;
  }
  module.exports = repeatStringNumTimes