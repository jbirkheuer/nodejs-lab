const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        console.log("Tentando conectar...");

        const uri = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs-shard-00-00.12epfkn.mongodb.net:27017,cursonodejs-shard-00-01.12epfkn.mongodb.net:27017,cursonodejs-shard-00-02.12epfkn.mongodb.net:27017/?ssl=true&replicaSet=atlas-12epfkn-shard-0&authSource=admin&retryWrites=true&w=majority`;

        await mongoose.connect(uri);

        console.log("✅ Conectado!");
    } catch (error) {
        console.log("❌", error.message);
    }
};

module.exports = connectToDatabase;
