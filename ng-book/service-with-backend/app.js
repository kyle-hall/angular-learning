
var express = require('express'),
    app = express();

app.use(express.methodOverride());

app.use(express.static("client"));

app.use(app.router);

app.get('/users', user.list);

app.listen(3000, function() {
   console.log("Your server is running on port 3000...");
});