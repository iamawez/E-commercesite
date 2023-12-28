const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('veiw'));

app.get('/', (req, res) => {
    console.log("E-commerce site");
    res.sendFile(path.join(__dirname, 'veiw', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
