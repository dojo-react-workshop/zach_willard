express = require('express');
app = express();
bp = require('body-parser');
path = require('path');
port = 8000;

app.use(bp.urlencoded({extended:true}));
app.use(bp.json());
app.use(express.static(path.join(__dirname + '/client')));
app.set('views', path.join(__dirname + '/client/templates'));
app.set('view engine', 'ejs');

require('./server/config/routes.js')(app);

app.listen(port, function() {
    console.log(`Server started on port: ${port}`);
})
