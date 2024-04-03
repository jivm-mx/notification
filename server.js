const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.post("/", (request, response) => {
  console.dir(request.body);
  response.send("[accepted]");
});

app.get("/", (request, response) => {
  console.log("Request", request.body);
  response.send("Hello world");
});



