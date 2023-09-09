
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const dotenv = require('dotenv'); 


dotenv.config();


const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const usersRouter = require('./routes/users');
const thoughtsRouter = require('./routes/thoughts');


app.use('/api/users', usersRouter);
app.use('/api/thoughts', thoughtsRouter);


app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
