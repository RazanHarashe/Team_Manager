const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/teammanager', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Database connected successfully'))
.catch(err => console.log('Database connection error:', err));

