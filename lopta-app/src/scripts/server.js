const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { TbDatabaseEdit } = require("react-icons/tb");
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/journeyRoute', (req, res) => {
  const data = req.body;

  if(data.checkbox == true){
    let startingURL = "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + data["startingAddress"]
    let destinationURL = "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + data["destinationAddress"]
  
    fetch(startingURL).then(response => response.json()) .then(data => console.log(data[0].lat + " " + data[0].lon)) .catch(error => console.error(error));
    fetch(destinationURL).then(response => response.json()) .then(data => console.log(data[0].lat + " " + data[0].lon))  .catch(error => console.error(error));
  }
})

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});