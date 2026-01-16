import fs from "fs";
export const readFileData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("Data.txt", "utf-8", (err, data) => {
      if (err) {
        reject("Error reading file");
      } else {
        resolve(data);
      }
    });
  });
};
