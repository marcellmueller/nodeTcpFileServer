const stdoutClearLine = () => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
};

module.exports = stdoutClearLine;
