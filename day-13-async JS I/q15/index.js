const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter countdown seconds: ", (input) => {
  let time = parseInt(input);
  if (isNaN(time) || time <= 0) {
    console.log("Please enter a valid positive number.");
    rl.close();
    return;
  }
  console.log(`Countdown started from ${time} seconds...`);
  const intervalId = setInterval(() => {
    console.log(`Time left: ${time}s`);
    time--;
    if (time < 0) {
      clearInterval(intervalId);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);
  setTimeout(() => {
    console.log('Press "s" anytime to stop the countdown.');
    process.stdin.on("data", (key) => {
      if (key.toString().trim().toLowerCase() === "s") {
        clearInterval(intervalId);
        console.log("Countdown Stopped by User!");
        rl.close();
      }
    });
  }, 500);
});
