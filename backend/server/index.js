const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => {
  res.json({message: "Hello!"});
})

app.get("/boards", (req, res) => {
    res.json({'first': {
        name: 'Board One'
    },
'second': {name: 'Board Two'}});
  })

app.listen(PORT, ()=> {
  console.log(`Server listening  on ${PORT}`);
}); 