const express = require('express');
const cors = require('cors');
const teamRoutes = require('./servers/routers/team.routes');
const app= express();
const port=8000;

require('./servers/config/mongoose.config');

app.use(cors());
app.use(express.json());

app.use('/api',teamRoutes);
app.listen(port, () => 
    console.log(`Server running on port ${port}`));
