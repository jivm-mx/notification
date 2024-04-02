const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.post("/notification", (request, response) => {  
  response.send("[accepted]");
});



