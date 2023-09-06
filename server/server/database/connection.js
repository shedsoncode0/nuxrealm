const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            process.env.DATABASE_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true, 
            });
            console.log(`Database connected to : ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}

module.exports = connectDB;