const express = require("express");
const app = express();
const PORT = 5000;
app.listen(PORT, function (err) {
  if (err) {
    console.log("there is an arror");
  } else {
    console.log(`server is running on port ${PORT}`);
  }
});
app.get('/', function (req, res) {
   res.send("Hello Express")
})




