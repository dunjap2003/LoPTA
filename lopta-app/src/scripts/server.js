const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/journeyRoute', (req, res) => {
    const data = req.body;
    console.log(data);
    console.log("hi");
})

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});