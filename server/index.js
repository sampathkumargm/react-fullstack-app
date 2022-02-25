const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/sundaysky", (req, res) => {
  const firstName = req.query.first_name;
  const accountType = req.query.acct_type;
  const crbKeyID = req.query.crb_key_id;

  axios({
    method: "post",
    url: "https://demo.web.sundaysky-sandbox.com/create_video_session",
    data: {
      data: {
        first_name: firstName,
        acct_type: accountType,
        crb_key_id: crbKeyID,
      },
    },
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
