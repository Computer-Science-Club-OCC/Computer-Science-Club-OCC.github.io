const express = require('express');
const app = express();
const path = require('path');
var favicon = require('serve-favicon');

/*use files in the public folder */
app.use(express.static(path.join(__dirname, 'public')));

//send html to the main page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

app.listen(3000, () => console.log('Server listening at 3000..'));
