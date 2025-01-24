const express = require('express');
const app = express();

// Add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongodb = require('./db/connect');

// Set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes'))


mongodb.initDb((err, mongodb) => {
    if (err) {
      console.log(err);
    } else {
        const PORT = process.env.PORT || 4000;
        app.listen(PORT, () => {
          console.log(`Server is running on http://localhost:${PORT}`);
        //   app.listen(port);
        //   console.log(`Connected to DB and listening on ${port}`);
        });
    }
});

// // Start server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });