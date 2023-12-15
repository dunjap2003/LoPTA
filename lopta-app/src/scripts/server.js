import express from 'express';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.json());

app.post('/journeyRoute', (req, res) => {
    const data = req.body;
    console.log(data);
})

const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});