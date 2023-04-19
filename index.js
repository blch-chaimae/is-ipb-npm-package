function isIPB(msg) {
  console.log("Hello from IPB node module");
  return msg === "This is IPB node module";
}

module.exports = isIPB;

exports.printMsg = function () {
  console.log("Hello, this is a message from IPB node module");
};
