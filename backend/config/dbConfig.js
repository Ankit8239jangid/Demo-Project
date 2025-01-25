import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database connection successful");
    })
    .catch((error) => {
        console.error("Database connection error:", error);
    });

const connectionDb = mongoose.connection;

connectionDb.on('error', (error) => {
    console.log(error);
});

connectionDb.on('connected', () => {
    console.log("Connected to Database successfully.");
});

export default connectionDb;