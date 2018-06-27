var express = require('express');
var app = express();

app.use(express.static("./build"));

app.listen(process.env.PORT||3500, function () {
    console.log("server is listening on port 3000");
});