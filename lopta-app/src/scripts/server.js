const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { TbDatabaseEdit } = require("react-icons/tb");
const app = express();

app.use(bodyParser.json());
app.use(cors());

let startingJSON, destinationJSON;
let final = {};
app.post('/predict', async (req, res) => {
  let data = req.body;

  if (data.checkbox == true) {
    try {
      let totalStarting = await fetch("https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + data["startingAddress"])
      startingJSON = await totalStarting.text();

      let totalDestination = await fetch("https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + data["destinationAddress"]);
      destinationJSON = await totalDestination.text();

      final = {
        "checkbox": data.checkbox,
        "starting": {
          "lng": JSON.parse(startingJSON)[0].lon,
          "lat": JSON.parse(startingJSON)[0].lat
        },
        "destination": {
          "lng": JSON.parse(destinationJSON)[0].lon,
          "lat": JSON.parse(destinationJSON)[0].lat
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  else{
    final = {
      "checkbox": data.checkbox
    }
  }
  
  res.json(final);
})

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});