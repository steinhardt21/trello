const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;
const database = require('./queries');

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get("/api", (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send({message: "Hello!"}); 
})

app.get("/boards", database.getBoards);
app.post("/addBoard", database.createBoard);

app.listen(PORT, ()=> {
  console.log(`Server listening  on ${PORT}`);
}); 