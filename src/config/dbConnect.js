import mongoose, { mongo } from "mongoose";

async function connectDB() {
    const connectionString = process.env.DB_CONNECTION_STRING;
    await mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    return mongoose.connection;
}

export default connectDB;