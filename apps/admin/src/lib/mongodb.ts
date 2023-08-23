import mongoose from 'mongoose';

interface Connection {
  isConnected?: number;
}

const connection: Connection = {};

const connectDB = async () => {
  if (connection.isConnected) return;

  const db = await mongoose.connect('mongodb://127.0.0.1:27017/test');

  connection.isConnected = db.connections[0].readyState;
};

export default connectDB;
