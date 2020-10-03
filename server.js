const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();

//Connect database
connectDB();

// init middleware
app.use(express.json({ extended: false }));

//define routes
app.use('/api/users', require('./routes/apis/users'));
app.use('/api/auth', require('./routes/apis/auth'));
app.use('/api/profile', require('./routes/apis/profile'));
app.use('/api/posts', require('./routes/apis/posts'));

// server static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
