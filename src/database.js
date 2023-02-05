import mongoose from 'mongoose';
import { DB } from './config';
(async () => {
  try {
    mongoose.set('strictQuery', false);
    const db = await mongoose.connect(DB);
    console.log("Connected to", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
