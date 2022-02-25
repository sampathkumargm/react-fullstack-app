const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/sundaysky", (req, res) => {
  axios({
    method: "post",
    url: "https://demo.web.sundaysky-sandbox.com/create_video_session",
    // data: {
    //   data: {
    //     first_name: "Scarlett",
    //     acct_type: "Checking",
    //     crb_key_id: "123456",
    //   },
    // },
  })
    .then((response) => {
      console.log(`API response log: ${response.data}`);
      res.send(response.data);
    })
    .catch((error) => {
      console.log(`API error log: ${error}`);
      res.send(error);
    });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
