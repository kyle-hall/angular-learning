
var express = require('express'),
    methodOverride = require('method-override'),
    app = express(),
    router = express.Router(),
    hits = require('./lib/routes/hits');

app.use(methodOverride());

app.use(express.static("client/public"));

app.use(router);

app.get('/hits', hits.count);
app.post('/hit', hits.registerNew);

app.listen(3000, function() {
   console.log("\nYour server is running on port 3000.\nPress Ctrl-C to terminate...");
});
