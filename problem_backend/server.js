import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import problemRoutes from './routes/problemRoutes.js';

const app = express();
const PORT = 5002;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/onlinejudge', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/problems', problemRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
