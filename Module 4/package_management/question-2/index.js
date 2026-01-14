import boxen from "boxen";

const message = "I am using my first external module!";
const title = "Hurray!!!";

console.log(
  boxen(message, {
    title: title,
    padding: 1,
    margin: 1,
    backgroundColor:"green",
    borderColor:"red"
  })
);

console.log(
  boxen(message, {
    title: title,
    padding: 1,
    margin: 1,
    borderStyle: "singleDouble",
    backgroundColor:"red",
    borderColor:"green"
  })
);

console.log(
  boxen(message, {
    title: title,
    padding: 1,
    margin: 1,
    borderStyle: "round",
    backgroundColor:"green",
    borderColor:"red"
  })
);
