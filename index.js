import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

dotenv.config();

const app = express();

app.use(cors({origin: "*"}));

app.use(bodyParser.json({ type: '*/*' }));  // middleware for helping parse incoming HTTP requests

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const CONNECTION_URL = process.env.MONGODB_CONNECTION_STRING;
const PORT = process.env.PORT|| 8080;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
app.use(express.static(path.resolve(__dirname, "./client")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client", "index.html"));
});
}

mongoose.connect(CONNECTION_URL, 
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify: false 
  })
  .then(() => app.listen(PORT, () => console.log(`🚀 Server is running on http://localhost:${PORT} 🚀 `)))
  .catch((error) => console.log(`${error} did not connect`));
  

  app.use('/posts', postRoutes);
  app.use('/users', userRoutes);