const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });


//Connecting Database
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB, {
    useNewUrlParser: true
}).then(con => {
    console.log("\n **********************************\n ✅ Succesfully Connected to DB...!\n **********************************\n")
}).catch(err =>{
    console.log(" 💥Error connecting to DB:\n\n",err);
});
