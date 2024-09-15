const mongoose = require('mongoose');

const MongoURI = 'mongodb+srv://Mamilla:mamilla7803@cluster0.mqbbjt2.mongodb.net/learn-platform?retryWrites=true&w=majority&appName=Cluster0';

const connectToMongo = async () => {
    try {
        await mongoose.connect(MongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        process.exit(1);
    }
}

module.exports = connectToMongo;