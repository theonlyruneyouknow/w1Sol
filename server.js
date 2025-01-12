const express = require('express');
const app = express();

app.use('/', require('./routes'))

// // Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});