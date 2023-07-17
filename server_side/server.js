import express from 'express';
import cors from 'cors';

import gloveDataRoutes from './routes/gloveData.js';

const app = express();

app.use(cors());

const port = process.env.port || 5000;

app.use('/posts', gloveDataRoutes);

app.listen(port, () => {
    console.log(`Running in port : ${port}`)
});