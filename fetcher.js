"use strict";
const fs = require("fs");
const request = require("request");
const fetcher = function (url, localFilePath) {
  request(url, (error, response, body) => {
    fs.writeFile(localFilePath, body, (err) => {
      if (err) {
        console.error("err");
        return;
      }
      console.log(
        `Downloaded and saved ${body.length} bytes to ${localFilePath}`
      );
    });
  });
};

fetcher(process.argv[2], process.argv[3]);
