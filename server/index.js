const express = require("express");
const app = express();
const cors = require('cors');
const port = 3000;
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs"),
  request = require("request");

app.use(bodyParser.json());
app.use(cors());
// const dir = path.join(__dirname, "public");

// app.use(express.static(dir));

app.get("/:file", (req, res) => {
  // Note: should use a stream here, instead of fs.readFile
  fs.readFile("./public/" + req.params.file, (err, data) => {
    if (err) {
      res.send("Oops! Couldn't find that file.");
    } else {
      // set the content type based on the file
      res.contentType("image/png");
      res.send(data);
    }
    res.end();
  });
});

const makeid = (length) => {
  var result = "";
  var characters = "-_.~";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const download = (uri, filename, callback) => {
  request.head(uri, (err, res, body) => {
    console.log("content-type:", res.headers["content-type"]);
    console.log("content-length:", res.headers["content-length"]);

    request(uri)
      .pipe(fs.createWriteStream("public/" + filename))
      .on("close", callback);
  });
};

app.post("/upload", (req, res) => {
  const image = req.body.imageUrl;
  const imageId = makeid(15);

  download(image, imageId, () => {
    res.status(200).send("http://darajava.ie:3000/" + imageId);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
